const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    about:{
        type:String,
    },
    contactNumber:{
        type:Number,
    },
    image: {
        type: String,
        required: true
    },
})

module.exports=mongoose.model("Profile",profileSchema);