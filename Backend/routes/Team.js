const express = require("express");
const { addMember,getAllTeams,addTeam } = require("../controllers/Team");

const router = express.Router();

router.post("/",addTeam);
router.get("/", getAllTeams)
router.patch("/:id", addMember)

module.exports = router;
