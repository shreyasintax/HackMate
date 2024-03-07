const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");
const { UnauthenticatedError } = require("../errors");

//auth middleware
exports.auth = async (req, res, next) => {
    const token =
        req.cookies.token ||
        req.body.token ||
        req.header("Authorization")?.replace("Bearer ", "");

    //if token missing
    if (!token) throw new UnauthenticatedError("Token is missing");
    //verify the token
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
    } catch (error) {
        throw new UnauthenticatedError("Token is invalid");
    }
    next();
};

// Role-based middleware
const checkRole = (expectedRole) => {
    return (req, res, next) => {
        if (req.user.accountType !== expectedRole) {
            throw new UnauthenticatedError(
                `This is a protected route for ${expectedRole} only`
            )
        }
        next();
    };
};

// isOrganiser middleware
exports.isOrganiser = checkRole("Organiser");

// isParticipant middleware
exports.isParticipant = checkRole("Participant");

// isAdmin middleware
exports.isAdmin = checkRole("Admin");
