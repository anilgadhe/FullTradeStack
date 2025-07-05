require("dotenv").config();
const express = require("express");
const ConnectToDB = require("./connect");
const { Holding } = require("./models/holding");
const { Position } = require("./models/Position");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const bodyParser = require("body-parser");
const { Order } = require("./models/Orders")
const app = express();
const PORT = process.env.PORT || 8000;
const URL = process.env.MONGO_URL;



const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://fulltradestack-dashboard.onrender.com"
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
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
// app.get("/allholdings", (req, res) => {

//     // let allHoldings = [
//     //     {
//     //         name: "BHARTIARTL",
//     //         qty: 2,
//     //         avg: 538.05,
//     //         price: 541.15,
//     //         net: "+0.58%",
//     //         day: "+2.99%",
//     //     },
//     //     {
//     //         name: "HDFCBANK",
//     //         qty: 2,
//     //         avg: 1383.4,
//     //         price: 1522.35,
//     //         net: "+10.04%",
//     //         day: "+0.11%",
//     //     },
//     //     {
//     //         name: "HINDUNILVR",
//     //         qty: 1,
//     //         avg: 2335.85,
//     //         price: 2417.4,
//     //         net: "+3.49%",
//     //         day: "+0.21%",
//     //     },
//     //     {
//     //         name: "INFY",
//     //         qty: 1,
//     //         avg: 1350.5,
//     //         price: 1555.45,
//     //         net: "+15.18%",
//     //         day: "-1.60%",
//     //         isLoss: true,
//     //     },
//     //     {
//     //         name: "ITC",
//     //         qty: 5,
//     //         avg: 202.0,
//     //         price: 207.9,
//     //         net: "+2.92%",
//     //         day: "+0.80%",
//     //     },
//     //     {
//     //         name: "KPITTECH",
//     //         qty: 5,
//     //         avg: 250.3,
//     //         price: 266.45,
//     //         net: "+6.45%",
//     //         day: "+3.54%",
//     //     },
//     //     {
//     //         name: "M&M",
//     //         qty: 2,
//     //         avg: 809.9,
//     //         price: 779.8,
//     //         net: "-3.72%",
//     //         day: "-0.01%",
//     //         isLoss: true,
//     //     },
//     //     {
//     //         name: "RELIANCE",
//     //         qty: 1,
//     //         avg: 2193.7,
//     //         price: 2112.4,
//     //         net: "-3.71%",
//     //         day: "+1.44%",
//     //     },
//     //     {
//     //         name: "SBIN",
//     //         qty: 4,
//     //         avg: 324.35,
//     //         price: 430.2,
//     //         net: "+32.63%",
//     //         day: "-0.34%",
//     //         isLoss: true,
//     //     },
//     //     {
//     //         name: "SGBMAY29",
//     //         qty: 2,
//     //         avg: 4727.0,
//     //         price: 4719.0,
//     //         net: "-0.17%",
//     //         day: "+0.15%",
//     //     },
//     //     {
//     //         name: "TATAPOWER",
//     //         qty: 5,
//     //         avg: 104.2,
//     //         price: 124.15,
//     //         net: "+19.15%",
//     //         day: "-0.24%",
//     //         isLoss: true,
//     //     },
//     //     {
//     //         name: "TCS",
//     //         qty: 1,
//     //         avg: 3041.7,
//     //         price: 3194.8,
//     //         net: "+5.03%",
//     //         day: "-0.25%",
//     //         isLoss: true,
//     //     },
//     //     {
//     //         name: "WIPRO",
//     //         qty: 4,
//     //         avg: 489.3,
//     //         price: 577.75,
//     //         net: "+18.08%",
//     //         day: "+0.32%",
//     //     },
//     // ];

//     // allHoldings.forEach((item) => {
//     //     let newHoldings = new Holding({
//     //         name:item.name,
//     //         qty: item.qty,
//     //         avg: item.avg,
//     //         price: item.price,
//     //         net: item.net,
//     //         day: item.day,

//     //     });

//     //     newHoldings.save();
//     // });
//     res.send("saved successfully");
// })

// app.get("/positions", (req, res) => {
//     let positions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     positions.forEach((position) => {
//         let newPositions = new Position({
//             product:position.product,
//             name: position.name,
//             qty: position.qty,
//             avg: position.avg,
//             price:position.price,
//             net:position.net,
//             day:position.day,
//             isLoss: position.isLoss,
//         });
//         newPositions.save();
//     })
//    res.send("Done!!!!!!!!!!!")
// })



app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
    let holdings = await Holding.find({});

    res.json(holdings);
})

app.get("/allPositions", async (req, res) => {
    let positions = await Position.find({});

    res.json(positions);
})

app.get("/newOrders",async(req,res)=>{
  let Orders = await Order.find({});

  res.json(Orders);
})

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    // Save to Order collection
    let newOrder = new Order({ name, qty, price, mode });
    await newOrder.save();

    // Fetch existing holding
    let existingHolding = await Holding.findOne({ name });

    if (mode === "BUY") {
      if (existingHolding) {
        const totalQty = existingHolding.qty + qty;
        const totalCost = existingHolding.avg * existingHolding.qty + price * qty;
        const newAvg = totalCost / totalQty;

        existingHolding.qty = totalQty;
        existingHolding.avg = newAvg;
        existingHolding.price = price;
        await existingHolding.save();
      } else {
        const newHolding = new Holding({
          name,
          qty,
          avg: price,
          price,
          net: "+0%",
          day: "+0%",
        });
        await newHolding.save();
      }
    }

    if (mode === "SELL") {
      if (!existingHolding) {
        return res.status(404).json("Cannot sell stock you don't hold");
      }

      if (qty > existingHolding.qty) {
        return res.status(400).json("Sell quantity exceeds holding quantity");
      }

      existingHolding.qty -= qty;

      if (existingHolding.qty === 0) {
        await Holding.deleteOne({ name });
      } else {
        existingHolding.price = price;
        await existingHolding.save();
      }
    }

    res.json("Order processed and holdings updated");
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal server error");
  }
});


ConnectToDB(URL)
    .then(() => {
        console.log("mongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`server is running on ${PORT}`);
        })

    })
    .catch((err) => {
        console.log(err);

    })