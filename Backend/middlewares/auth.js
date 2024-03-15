const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/User");


//auth middleware
exports.auth = async (req, res, next) => {
    try {
        const token = req.body.token  || req.cookies.hackMateCookie 
        console.log(token)
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Missing",
            });
        }
        //verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
            console.log(req.user)
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Token is Invalid"
            });
        }
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Something Went Wrong while verifying the token"
        })
    }

};


const checkRole = (expectedRole) => {
    return (req, res, next) => {
        if (req.user.role !== expectedRole) {
            return res.status(401).json({
                success: false,
                message: `This is a protected route for ${expectedRole} only`
            })
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
