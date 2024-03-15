const express = require("express");
const { addOpportunity, getSingleOpportunity, getAllOpportunity, deleteOpportunity } = require("../controllers/Opportunity");
const {auth,isOrganiser}=require("../middlewares/auth");
const { getAllTeams, addTeam } = require("../controllers/Team");

const router = express.Router();

router.post("/", auth, isOrganiser, addOpportunity); 

router.get("/:id", getSingleOpportunity)

router.get("/", getAllOpportunity)

router.delete("/:id", deleteOpportunity)

router.get("/:oppoId/team", getAllTeams)

router.post("/:oppoId/team",auth,addTeam);

module.exports = router;
