const { Schema, model } = require("mongoose");

const positionsSChema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
})


const Position = new model("Position",positionsSChema);

module.exports={Position}