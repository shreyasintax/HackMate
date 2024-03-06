const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Send OTP
exports.sendOTP = async (req, res) => {
    try {
        // Fetch email from the body of the request
        const { email } = req.body;

        // Check if the user already exists
        const checkUserPresent = await User.findOne({ email });

        // If the user already exists, then return a response
        if (checkUserPresent) {
            return res.status(400).json({
                success: false,
                message: "User already registered"
            });
        }

        // Generate OTP
        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        });
        console.log("OTP generated: ", otp);

        // Check if the OTP is unique
        let result = await OTP.findOne({ otp: otp });

        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            });
            result = await OTP.findOne({ otp: otp });
        }

        const otpPayload = { email, otp };

        // Create an entry for OTP
        const otpBody = await OTP.create(otpPayload);
        console.log(otpBody);

        // Return a successful response
        res.status(200).json({
            success: true,
            message: "OTP Sent Successfully",
            otp
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Signup
exports.signUp = async (req, res) => {
    try {
        // Data fetch from body of request
        const { firstName, lastName, email, password, confirmPassword, accountType, contactNumber, otp } = req.body;

        // Validate it
        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Match 2 passwords
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and ConfirmPassword value does not match, Please try again"
            });
        }

        // Check user already exists or not
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User is already registered"
            });
        }

        // Find most recent OTP stored for the user
        const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
        console.log(recentOtp);

        // Validate OTP
        if (recentOtp.length === 0 || otp !== recentOtp[0].otp) {
            // Invalid OTP
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create entry in DB
        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password: hashedPassword,
            accountType,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        });

        // Return res
        return res.status(200).json({
            success: true,
            message: "User is registered successfully",
            user
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again"
        });
    }
};

// Login
exports.Login = async (req, res) => {
    try {
        // Get Data from req body
        const { email, password } = req.body;
        // Validation data
        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required, Please try again"
            });
        }
        // User check exist or not
        const user = await User.findOne({ email }).populate("additionalDetails");
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered, Please signup first"
            })
        }
        // Generate JWT, after password matching
        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user_id,
                accountType: user.accountType
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h"
            })
            user.token = token;
            user.password = undefined;

            // Create cookie and send response
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "Logged in successfully"
            })
        } else {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect"
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            success: false,
            message: "Login Failure! Please Try again"
        })
    }
}

// Change Password
exports.changePassword = async (req, res) => {
    // Get data from req body
    // Get oldPassword,newPassword,confirmNewPassword
    // Validation

    // Update pwd in DB
    // Send mail - Password updated
    // return response
}