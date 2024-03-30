const express = require("express");
const router = express.Router();

const { getSingleUser, deleteProfile, addUser } = require("../controllers/Profile");
const { login, sendOTP, verifyOtp } = require("../controllers/Auth");
const { isOrganiser, isParticipant } = require("../middlewares/auth");
const { auth } = require("../middlewares/auth");
const { isOtpVerified } = require("../middlewares/verifyOTP");


router.post("/signup", isOtpVerified, addUser);
router.post("/login", login);
router.get("/", auth, getSingleUser);

router.post("/sendOtp", sendOTP);
router.post("/verifyOTP", verifyOtp);

router.delete("/:id", deleteProfile);


module.exports = router;
