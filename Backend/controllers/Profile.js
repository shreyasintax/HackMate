const User = require("../models/User");
const Profile = require("../models/Profile");
const mailSender = require("../utils/MailSender");
const bcrypt = require("bcrypt");
const OTP = require("../models/OTP");

exports.addUser = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            otp,
            github,
            linkedin,
            hardSkills,
            softSkills,
            city,
            state,
            pinCode,
            dateOfBirth,
            gender,
            description,
            contactNumber
        } = req.body;

        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword ||
            !otp || !city || !state || !pinCode || !gender || !dateOfBirth 
        ) {
            return res.status(400).json({
                success: false,
                message: "Fill all required details"
            });
        }

        if (password != confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

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
        else if (otp !== recentOtpResponse[0].otp)
            return res.json({
                success: false,
                message: "OTP does not match"
            })
            
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing Password"
            });
        }

        const profileDetails = await Profile.create({
            description,
            contactNumber
        });

        let softArray=[];
        softArray.push(softSkills);

        let hardArray=[];
        hardArray.push(hardSkills);

        let links=[];
        links.push(github);
        links.push(linkedin);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            confirmPassword,
            accountType,
            links,
            hardSkills:hardArray,
            softSkills:softArray,
            city,
            state,
            pinCode,
            dateOfBirth,
            gender,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });

        mailSender("ketankansal124@gmail.com", "SSKH", "<p>Team added successfully </p>");

        return res.status(201).json({
            success: true,
            message: "User added successfully"
        });
    } catch (error) {
        console.error("Error adding user:", error);
        return res.status(500).json({
            success: false,
            message: "Some error occurred while adding user"
        });
    }
};

exports.getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id).populate('additionalDetails');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        user.password = undefined;

        return res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            user
        });
    } catch (error) {
        console.error("Error retrieving user:", error);
        return res.status(500).json({
            success: false,
            message: "Some error occurred while retrieving user"
        });
    }
};

exports.deleteProfile = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const profileId = user.additionalDetails;

        const profile = await Profile.findByIdAndDelete(profileId);

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
            user,
            profile
        });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({
            success: false,
            message: "Some error occurred while deleting user"
        });
    }
};
