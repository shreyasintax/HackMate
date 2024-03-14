const mongoose=require("mongoose");

const roundSchema=new mongoose.Schema({
    description:{
        type:String,
    },
    resultDate:{
        type:Date,
    }
});

module.exports=mongoose.model("Round",roundSchema)