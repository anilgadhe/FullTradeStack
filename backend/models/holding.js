const { Schema, model } = require("mongoose");

const holdingSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});


const Holding = new model("Holding",holdingSchema);


module.exports = {Holding};