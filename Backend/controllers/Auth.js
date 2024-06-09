const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const otpGenerator = require("otp-generator");
const OTP = require("../models/OTP");
const mailSender = require("../utils/MailSender");
const emailTemplate = require("../mail/templates/emailVerification");
const { contactUsEmail } = require("../mail/templates/contactForm");
const { contactUsOwnerEmail } = require("../mail/templates/contactOwner");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and password"
            });
        }

        let user = await User.findOne({ email });

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
                sameSite: 'strict'
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
    // Fetch email from req body
    const { email } = req.body;
    // Check if email is provided
    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email not entered"
        });
    }
    const checkUserPresent = await User.findOne({ email });

    if (checkUserPresent) {
        return res.status(409).json({
            success: false,
            message: "User already exists"
        });
    }

    // Generate OTP
    const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
    });

    // Save otp in db
    let hashedOTP;
    try {
        hashedOTP = await bcrypt.hash(otp, 10);
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error in hashing OTP"
        });
    }

    mailSender(email, "Verification Email", emailTemplate(otp));
    const otpBody = await OTP.create({ email, otp: hashedOTP });

    return res.status(202).json({
        success: true,
        message: "OTP sent successfully",
        otp, // For testing purpose, otp is displayed
    });
};

exports.verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and otp"
            });
        }
        console.log(otp)
        const recentOtpResponse = await OTP.find({ email })
            .sort("-createdAt")
            .limit(1);

        console.log(recentOtpResponse);

        //validate otp
        if (recentOtpResponse.length === 0)
            return res.json({
                success: false,
                message: "OTP does not exists in db"
            })

        const payload = {
            email,
            isOtpVerified: true
        };

        const hashedOTP = recentOtpResponse[0].otp;
        if (await bcrypt.compare(otp, hashedOTP)) {
            // OTP Match
            let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

            // Create cookie
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 50 * 1000), //3 days
                httpOnly: true,
                sameSite: 'strict'
            };

            res.cookie("otpCookie", token, options).status(200).json({
                success: true,
                token,
                message: "OTP verified successfully",
            });

        } else {
            // OTP does not match
            return res.status(403).json({
                success: false,
                message: "Incorrect OTP"
            });
        }
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
}

exports.changePassword = async (req, res) => {
    try {
        const userId = req.user.id;
        const { email, oldPassword, newPassword, confirmNewPassword } = req.body;

        // Validation
        if (!email || !oldPassword || !newPassword) {
            return res.status(400).json({
                success: false,
                message: "All fields are required to change password"
            });
        }
        if (confirmNewPassword && newPassword !== confirmNewPassword) {
            return res.status(400).json({
                success: false,
                message: "NewPassword and ConfirmNewPassword do not match"
            });
        }
        if (newPassword === oldPassword) {
            return res.status(400).json({
                success: false,
                message: "New password and old password cannot be the same"
            });
        }

        // Check if old password is valid
        const userDetails = await User.findById(userId);
        const isPasswordValid = await bcrypt.compare(oldPassword, userDetails.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "The old password is incorrect"
            });
        }

        // Update password in the database
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        const user = await User.findOneAndUpdate(
            { email },
            { password: hashedNewPassword },
            { new: true, runValidators: true }
        );

        // Send mail notification that password updated
        const mailResponse = await mailSender(
            email,
            "Password Changed",
            `<p>Dear ${user.firstName} ${user.lastName}, Your password has been changed Successfully</p>`
        );
        
        // Return response
        res.status(200).json({
            success: true,
            message: "Password changed successfully",
        });
    } catch (error) {
        console.error("Error occurred while changing password:", error);
        res.status(500).json({
            success: false,
            message: "An unexpected error occurred while changing password"
        });
    }
};

exports.contactUs = async (req, res) => {
    try {
        const { firstName, lastName, email, message } = req.body;

        // Validate form fields
        if (!firstName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        let fullName = firstName;
        if (lastName) {
            fullName = `${firstName} ${lastName}`;
        }
        // Send email to user
        await mailSender(email,"Thank you for contacting us",contactUsEmail(email,fullName,message));

        // Send email to owner
        await mailSender(process.env.OWNER_MAILS,"New Contact Us Submission",contactUsOwnerEmail(fullName,email,message));

        return res.status(200).json({
            success: true,
            message: "Form submitted successfully"
        });
        
    } catch (error) {
        console.error("Error in contactUs function:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

