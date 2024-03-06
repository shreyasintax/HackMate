const mongoose = require("mongoose");
const mailSender = require("../utils/MailSender");

const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60,
    }
});

// To send Emails
async function sendVerificationEmail(email, otp) {
    try {
        const mailResponse = await mailSender(email, "Verificaton Email from HackMate", otp);
        console.log("Email Sent Succesfully: ", mailResponse);
    } catch (err) {
        console.log("Error occured while sending Mails: ", err);
        throw err;
    }
}

OTPSchema.pre("save", async function (next) {
    await sendVerificationEmail(this.email, this.otp);
    next();
})

module.exports = mongoose.model("OTP", OTPSchema);