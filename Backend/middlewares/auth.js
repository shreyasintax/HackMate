const jwt = require('jsonwebtoken');
require("dotenv").config();
const User = require("../models/User");

// Auth middleware
exports.auth = async (req, res, next) => {
    try {
        // Extract Token
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");

        // If token is missing, then return response
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing"
            });
        }

        // Verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        } catch (err) {
            // Verification Issue
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            });
        }
        next();
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong while validating the token"
        });
    }
};

// Role-based middleware
const checkRole = (expectedRole) => {
    return (req, res, next) => {
        try {
            if (req.user.accountType !== expectedRole) {
                return res.status(401).json({
                    success: false,
                    message: `This is a protected route for ${expectedRole} only`
                });
            }
            next();
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "User role"
            });
        }
    };
};

// isOrganiser middleware
exports.isOrganiser = checkRole("Organiser");

// isParticipant middleware
exports.isParticipant = checkRole("Participant");

// isAdmin middleware
exports.isAdmin = checkRole("Admin");
