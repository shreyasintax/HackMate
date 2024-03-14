const { Schema, model } = require("mongoose");
const mailSender = require("../utils/MailSender");
const emailTemplate = require("../mail/templates/emailVerification");


const OTPSchema = new Schema({
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // 5 min
  },
});

OTPSchema.pre("save", async function (next) {
  try {

    if (this.isNew) {
      const mailResponse = await mailSender(
        this.email,
        "Verification Email",
        emailTemplate(this.otp)
      );
    }
    next();
  } catch (error) {
    console.error("Error occurred while sending email", error);
    return res.json({
      succes:true,
      message:"Error in sending mail"
    })
  }
});

module.exports = model("OTP", OTPSchema);
