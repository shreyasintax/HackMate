const express = require("express");
const { addOpportunity, getSingleOpportunity, getAllOpportunity, deleteOpportunity } = require("../controllers/Opportunity");
const {auth,isOrganiser}=require("../middlewares/auth");

const router = express.Router();

router.post("/", auth, isOrganiser, addOpportunity);
router.get("/:id", getSingleOpportunity)
router.get("/", getAllOpportunity)
router.delete("/:id", deleteOpportunity)

module.exports = router;
