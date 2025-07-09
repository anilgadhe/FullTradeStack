require("dotenv").config();
const express = require("express");
const ConnectToDB = require("./connect");
const { Holding } = require("./models/holding");
const { Position } = require("./models/Position");
const { Order } = require("./models/Orders");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8000;
const URL = process.env.MONGO_URL;

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://fulltradestack-dashboard.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed from this origin"));
      }
    },
    credentials: true,
  })
);


app.use(cookieParser());
app.use(bodyParser.json());

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  const { username } = req.query;
  if (!username) return res.status(400).json("Username is required");
  const holdings = await Holding.find({ username });
  res.json(holdings);
});

app.get("/totalHoldings",async(req,res)=>{
  const totalHoldings = await Holding.find({});

  res.json(totalHoldings);
})

app.get("/allPositions", async (req, res) => {
  const positions = await Position.find({});
  res.json(positions);
});

app.get("/newOrders", async (req, res) => {
 
  const { username } = req.query;
  
  if (!username) return res.status(400).json("Username is required");
  const orders = await Order.find({ username }).sort({ date: -1 });
  res.json(orders);
});

app.get("/allOrders",async(req,res)=>{
  const allOrders= await Order.find({});
  res.json(allOrders);
})

app.post("/newOrder", async (req, res) => {
  let { name, qty, price, mode, username } = req.body;

  console.log("📥 Incoming order payload:", req.body);

  if (!username || !name || !qty || !price || !mode) {
    console.log("❌ Missing required fields:", { name, qty, price, mode, username });
    return res.status(400).json("Missing required fields");
  }

  try {
    qty = parseInt(qty);
    price = parseFloat(price);

    console.log("✅ Parsed values:", { name, qty, price, mode, username });

    const order = new Order({ name, qty, price, mode, username }); // Ensure this includes username
    await order.save();

    console.log("📦 Order saved in DB:", order);

    const existing = await Holding.findOne({ name, username });

    if (mode === "BUY") {
      if (existing) {
        console.log("📈 Existing holding found:", existing);
        const totalQty = existing.qty + qty;
        const totalCost = existing.avg * existing.qty + price * qty;
        const newAvg = totalCost / totalQty;
        existing.qty = totalQty;
        existing.avg = newAvg;
        existing.price = price;
        existing.date = new Date();
        await existing.save();
        console.log("✅ Updated existing holding:", existing);
      } else {
        const newHolding = new Holding({
          name,
          qty,
          avg: price,
          price,
          net: "+0%",
          day: "+0%",
          username,
          date: new Date(),
        });
        await newHolding.save();
        console.log("🆕 New holding created:", newHolding);
      }
    }

    if (mode === "SELL") {
      if (!existing) {
        console.log("❌ Attempted to sell stock not held.");
        return res.status(404).json("Cannot sell stock you don't hold");
      }

      if (qty > existing.qty) {
        console.log("❌ Sell quantity exceeds holding:", { qtyToSell: qty, holdingQty: existing.qty });
        return res.status(400).json("Sell quantity exceeds holding");
      }

      existing.qty -= qty;
      if (existing.qty === 0) {
        await Holding.deleteOne({ name, username });
        console.log("🗑️ Holding deleted due to 0 qty");
      } else {
        existing.price = price;
        existing.date = new Date();
        await existing.save();
        console.log("✅ Updated holding after SELL:", existing);
      }
    }

    res.json("Order processed and holdings updated");
  } catch (err) {
    console.error("💥 Error in /newOrder:", err);
    res.status(500).json("Internal server error");
  }
});




ConnectToDB(URL)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
