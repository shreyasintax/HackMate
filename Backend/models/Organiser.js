const mongoose=require("mongoose");

const organiserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    logoImage:{
        type:String,
    }
});

module.exports=mongoose.model("Organiser",organiserSchema)