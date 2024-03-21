const mongoose=require("mongoose");

const roundSchema=new mongoose.Schema({
    description:{
        type:String,
    },
    resultDate:{
        type:Date,
    },
    deadline:{
        type:Date
    }
});

module.exports=mongoose.model("Round",roundSchema)