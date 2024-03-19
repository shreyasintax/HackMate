const Opportunity = require("../models/Opportunity");
const Round = require("../models/Round");
const Team = require("../models/Team");
const mailSender = require("../utils/MailSender");

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
            r1, r2, r3, r4

            // Add other properties from req.body if needed
        } = req.body;

        // Validate (mongoose validation is already present so no need to validate it)
        if (
            !name ||
            !regDeadline ||
            !description ||
            !mode ||
            !rewards ||
            !FAQs ||
            !contactDetails ||
            !eligibility ||
            !noOfRounds
            // Add other required fields from req.body
        ) {
            console.log("Fill all required details");
            return res.json({
                success: false,
                mesage: "Fill all required details"
            });
        }
        let teamArray = [];

        const roundArray = [];
        if (r1) {
            roundArray.push(r1)
        } if (r2) {
            roundArray.push(r2)
        }
        if (r3) {
            roundArray.push(r3)
        }
        if (r4) {
            roundArray.push(r4)
        }

        let newTimeline = [];
        for (let i = 0; i < roundArray.length; i++) {
            let newRound = await Round.create({
                description: roundArray[i].description,
                resultDate: roundArray[i].resultDate
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
            // Add other opportunity properties from req.body
        });

        // Your existing user creation logic goes here...

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
    mailSender(team.teamLeader.email, "Invite mail", `
        <button onclick="window.location.href='/http://localhost:3000/acceptPage/${teamId}'">Accept</button>
    `);
}


