const express = require("express");
const { addMember,getAllTeams,addTeam } = require("../controllers/Team");
const {auth}=require("../middlewares/auth");

const router = express.Router();

router.post("/:oppoId/team",auth,addTeam);
router.get("/", getAllTeams)
router.patch("/:id", addMember)

module.exports = router;
