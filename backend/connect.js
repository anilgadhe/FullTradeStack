const mongoose = require("mongoose");


async function ConnectToDB(url){
   await mongoose.connect(url)
}


module.exports = ConnectToDB;