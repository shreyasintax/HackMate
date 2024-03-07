const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  contactNumber: {
    type: Number,
    trim: true,
  },
  description:{
    type:String
  }
});

module.exports = model("Profile", profileSchema);
