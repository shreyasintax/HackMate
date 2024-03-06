const express=require("express");
const app=express();
const db=require("./config/Database");
const cloudinary=require("./config/Cloudinary")
require("dotenv").config();


db.connect();
cloudinary.connect();
app.use(express.json());

// app.use("HackMate/v1",)
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`App is listening to Port ${PORT}`);
});