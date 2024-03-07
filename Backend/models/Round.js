const mongoose=require("mongoose");

const roundSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    resultDate:{
        type:Date,
        required:true
    }
});

module.exports=mongoose.model("Round",roundSchema)