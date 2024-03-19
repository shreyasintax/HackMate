const express = require("express");
const { addMember,getAllTeams,addTeam } = require("../controllers/Team");
const {auth}=require("../middlewares/auth");

const router = express.Router();

router.patch("/:id", addMember)

module.exports = router;
