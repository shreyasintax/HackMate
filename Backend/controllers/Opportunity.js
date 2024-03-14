const Opportunity = require("../models/Opportunity");
const Round = require("../models/Round");

exports.addOpportunity = async (req, res) => {
    try {
        const {
            name,
            regDeadline,
            description,
            mode,
            rewards,
            FAQs,
            contactDetails,
            eligibility,
            noOfRounds,
            rounds
        } = req.body;

        if (
            !name ||
            !regDeadline ||
            !description ||
            !mode ||
            !rewards ||
            !FAQs ||
            !contactDetails ||
            !eligibility ||
            !noOfRounds ||
            !rounds
        ) {
            return res.status(400).json({
                success: false,
                message: "Fill all required details"
            });
        }

        const newRounds = [];
        for (const round of rounds) {
            const newRound = await Round.create(round);
            newRounds.push(newRound._id);
        }

        const opportunity = await Opportunity.create({
            name,
            regDeadline,
            description,
            mode,
            rewards,
            FAQs,
            contactDetails,
            eligibility,
            noOfRounds,
            rounds: newRounds
        });

        return res.status(201).json({
            success: true,
            message: "Opportunity added successfully"
        });
    } catch (error) {
        console.error("Error adding opportunity:", error);
        return res.status(500).json({
            success: false,
            message: "Some error occurred while adding opportunity"
        });
    }
};

exports.getSingleOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        const opportunity = await Opportunity.findById(id);

        if (!opportunity) {
            return res.status(404).json({
                success: false,
                message: "Opportunity not found"
            });
        }

        return res.status(200).json({
            success: true,
            opportunity
        });
    } catch (error) {
        console.error("Error retrieving opportunity:", error);
        return res.status(500).json({
            success: false,
            message: "Some error occurred while retrieving opportunity"
        });
    }
};

exports.getAllOpportunity = async (req, res) => {
    try {
        const opportunities = await Opportunity.find({});

        if (!opportunities || opportunities.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No opportunities listed"
            });
        }

        return res.status(200).json({
            success: true,
            opportunities
        });
    } catch (error) {
        console.error("Error retrieving opportunities:", error);
        return res.status(500).json({
            success: false,
            message: "Some error occurred while retrieving opportunities"
        });
    }
};

exports.deleteOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        const opportunity = await Opportunity.findByIdAndDelete(id);

        if (!opportunity) {
            return res.status(404).json({
                success: false,
                message: "Opportunity not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Opportunity deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting opportunity:", error);
        return res.status(500).json({
            success: false,
            message: "Some error occurred while deleting opportunity"
        });
    }
};
