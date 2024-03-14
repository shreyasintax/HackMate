const express = require("express");
const { addOpportunity, getSingleOpportunity, getAllOpportunity, deleteOpportunity } = require("../controllers/Opportunity");
const router = express.Router();

router.post("/", addOpportunity);
router.get("/:id", getSingleOpportunity)
router.get("/", getAllOpportunity)
router.delete("/:id",deleteOpportunity)

module.exports = router;
