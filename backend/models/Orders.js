const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String,
})

const Order = new model("Order",OrderSchema);

module.exports={Order};