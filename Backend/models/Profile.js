const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  contactNumber: {
    type: String,
    trim: true,
  },
  description:{
    type:String
  }
});

module.exports = model("Profile", profileSchema);
