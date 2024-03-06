const User = require("../models/User");
const mailSender = require("../utils/MailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto"); 

// resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
    try {
        // Get email from req body
        const email = req.body.email;
        // Check User for this email, email verification
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({
                success: false,
                message: "Your email is not registered with us"
            });
        }
        // Generate Token
        const token = crypto.randomUUID();
        // Update user by adding token and expiration time
        const updatedDetails = await User.findOneAndUpdate(
            { email: email },
            {
                resetPasswordToken: token, // Change 'token' to 'resetPasswordToken'
                resetPasswordExpires: Date.now() + 5 * 60 * 1000
            },
            { new: true }
        );
        // Create url
        const url = `http://localhost:3000/update-password/${token}`;
        // Send mail containing the url
        await mailSender(email, "Password Reset Link", `Password Reset Link ${url}`);
        // Return Response
        return res.json({
            success: true,
            message: "Email Sent Successfully, Please check email and change pwd"
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong while sending reset pwd mail"
        });
    }
};

// resetPassword
exports.resetPassword = async (req, res) => {
    try {
        // Data fetch
        const { password, confirmPassword, resetPasswordToken } = req.body;
        // Validation
        if (password !== confirmPassword) {
            return res.json({
                success: false,
                message: "Password not matching"
            });
        }
        // Get UserDetails from DB using resetPasswordToken
        const userDetails = await User.findOne({ resetPasswordToken: resetPasswordToken });
        // If no entry - Invalid token
        if (!userDetails) {
            return res.json({
                success: false,
                message: "Token is invalid"
            });
        }
        // Token time check
        if (userDetails.resetPasswordExpires < Date.now()) {
            return res.json({
                success: false,
                message: "Token is expired, Please regenerate your token"
            });
        }
        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Update Password
        await User.findOneAndUpdate(
            { resetPasswordToken: resetPasswordToken },
            { password: hashedPassword, resetPasswordToken: null, resetPasswordExpires: null },
            { new: true }
        );
        // return response
        return res.status(200).json({
            success: true,
            message: "Password reset successful"
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong while resetting the password"
        });
    }
};
