const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const otpGenerator = require("otp-generator");
const OTP = require("../models/OTP");


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and password"
            });
        }

        let user = await User.findOne({ email }); // Change const to let

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User is not registered"
            });
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.accountType
        };

        if (await bcrypt.compare(password, user.password)) {
            // Password Match
            let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

            user = user.toObject();
            user.token = token;
            user.password = undefined;

            // Create cookie
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 50 * 1000), //3 days
                httpOnly: true,
                sameSite: 'strict' // Or 'lax', depending on your requirements
            };

            res.cookie("hackMateCookie", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "User logged in successfully",
            });

        } else {
            // Password does not match
            return res.status(403).json({
                success: false,
                message: "Password Incorrect"
            });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({
            success: false,
            message: "Some error occurred while logging in"
        });
    }
};

exports.sendOTP = async (req, res) => {
    //fetch email from req body
    const { email } = req.body;
    //check if user already exists ?
    if (!email) {
        return res.json({
            success: false,
            message: "Email not entered"
        })
    }
    const checkUserPresent = await User.findOne({ email });

    if (checkUserPresent) {
        return res.json({
            success: false,
            message: "User already exists"
        })
    }

    //generate Otp
    const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
    });

    //TODO: check if otp is unique

    //save otp in db
    const otpBody = await OTP.create({ email, otp });

    return res.status(200).json({
        success: true,
        msg: "otp sent successfully",
        otp,
    });
};


