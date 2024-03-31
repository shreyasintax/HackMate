const Opportunity = require("../models/Opportunity");
const Round = require("../models/Round");
const Team = require("../models/Team");
const mailSender = require("../utils/MailSender");
const requestTeamJoin = require("../mail/templates/requestTeamJoin");

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
            // Add other required fields from req.body
        ) {
            console.log("Fill all required details");
            return res.json({
                success: false,
                mesage: "Fill all required details"
            });
        }
        let teamArray = [];
        let newTimeline = [];
        for (let i = 0; i < rounds.length; i++) {
            let newRound = await Round.create({
                description: rounds[i].description,
                resultDate: rounds[i].resultDate,
                deadline: rounds[i].deadline
            })
            newTimeline.push(newRound._id);
        }

        const opportunity = await Opportunity.create({
            name,
            regDeadline,
            description,
            timeline: newTimeline,
            mode,
            rewards,
            FAQs,
            contactDetails,
            eligibility,
            noOfRounds,
            teams: teamArray
        });

        return res.json({
            success: true,
            message: "Opportunity added successfully"
        });
    } catch (err) {
        console.error(err);
        return res.json({
            success: false,
            message: "Some error occurred while adding Opportunity"
        });
    }
};

exports.getSingleOpportunity = async (req, res) => {
    let { id } = req.params;

    let opportunity = await Opportunity.findById(id);

    if (!opportunity) {
        return res.json({
            success: "false",
            mesage: "No Opportunity Listed"
        })
    }
    return res.json({
        success: true,
        opportunity
    });
}


exports.getAllOpportunity = async (req, res) => {
    let opportunity = await Opportunity.find({});
    if (!opportunity) {
        return res.json({
            success: "false",
            mesage: "No Opportunity Listed"
        })
    }
    return res.json({
        success: true,
        opportunity
    });
}

exports.deleteOpportunity = async (req, res) => {
    let { id } = req.params;

    let opportunity = await Opportunity.findByIdAndDelete(id);

    if (!opportunity) {
        return res.json({
            success: "false",
            mesage: "No Opportunity Listed"
        })
    }
    return res.json({
        success: true,
        message: "Opportunity Deleted"
    });
}

exports.sendInvite = async (req, res) => {
    const { teamId } = req.params;
    console.log(teamId);
    let team = await Team.findById(teamId).populate("teamLeader");
    mailSender(team.teamLeader.email, "Invite mail", requestTeamJoin("123", teamId)); // userId -> 123
}


