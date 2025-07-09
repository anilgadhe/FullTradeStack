const { Schema, model } = require("mongoose");

const holdingSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number, required: true },
  price: { type: Number, required: true },
  net: { type: String, default: "+0%" },
  day: { type: String, default: "+0%" },
  username: { type: String, required: true }, // ✅ updated from userId to username
  date: { type: Date, default: Date.now },
});

const Holding = model("Holding", holdingSchema);
module.exports = { Holding };
