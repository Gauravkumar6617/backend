require("dotenv").config();
const mongoose = require("mongoose");
const Connection = async()=>{
    try {
        

       await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
       });
       console.log("Connected to MongoDB");

    }catch{
        console.log("Error connecting to MongoDB");
    }
}

module.exports= Connection;

    