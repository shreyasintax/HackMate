const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        enum: ["Organiser", "Participant", "Admin"],
        required: true
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Profile"
    },
    token: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    links:[{
        type:String
    }],
    hardSkills:[{
        type:String
    }],
    softSkills:[{
        type:String
    }],
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender: {
        type: String,
        enum: ["M", "F"],
        required: true
    },
})

module.exports = mongoose.model("User", userSchema);