const Opportunity = require("../models/Opportunity");
const Team = require("../models/Team");
const MailSender = require("../utils/MailSender");

exports.addTeam = async (req, res) => {
    try {
        const {
            name,
            idea,
            skillsPreffered,
            noOfMembers
        } = req.body;

        const { id } = req.user;
        const { oppoId } = req.params;

        if (!name || !idea || !skillsPreffered || !noOfMembers) {
            return res.status(400).json({
                success: false,
                message: "Fill all required details"
            });
        }

        let skillArray=[];
        skillArray.push(skillsPreffered);

        const team = await Team.create({
            oppoId,
            name,
            idea,
            skillsPreffered:skillArray,
            noOfMembers,
            teamLeader: id
        });

        const updatedOpportunity = await Opportunity.findByIdAndUpdate(
            oppoId,
            { $push: { teams: team._id } },
            { new: true }
        );


        return res.status(201).json({
            success: true,
            message: "Team added successfully",
            team
        });
    } catch (error) {
        console.error("Error adding team:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

// exports.getAllTeams = async (req, res) => {
//     try {
//         let oppoId=req.params;
//         let opportunity=await Opportunity.findById(oppoId);

//         const teams = await Team.find({});

//         if (!teams || teams.length === 0) {
//             return res.status(404).json({
//                 success: false,
//                 message: "No Teams made yet"
//             });
//         }

//         return res.status(200).json({
//             success: true,
//             teams
//         });
//     } catch (error) {
//         console.error("Error retrieving teams:", error);
//         return res.status(500).json({
//             success: false,
//             message: "Internal server error"
//         });
//     }
// };

exports.getAllTeams = async (req, res) => {
    try {
        const {oppoId} = req.params; // Assuming the parameter is named 'opportunityId'
        const opportunity = await Opportunity.findById(oppoId);

        if (!opportunity) {
            return res.status(404).json({
                success: false,
                message: "Opportunity not found"
            });
        }

        // Extract team IDs from the opportunity
        const teamIds = opportunity.teams;

        // Fetch teams based on the extracted IDs
        const teams = await Team.find({ _id: { $in: teamIds } });

        if (!teams || teams.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No Teams found for this opportunity"
            });
        }

        return res.status(200).json({
            success: true,
            teams
        });
    } catch (error) {
        console.error("Error retrieving teams:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

exports.addMember = async (req, res) => {
    const {id} = req.params;
    try {
        const updatedTeam = await Team.findOneAndUpdate(
            { _id: id },
            { $inc: { noOfMembers: 1 } },
            { new: true }
        );

        if (!updatedTeam) {
            return res.status(404).json({ error: "Team not found" });
        }
        return res.status(200).json(updatedTeam);
    } catch (error) {
        console.error("Error adding member:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// exports.sendMailOnTeam = async (req, res) => {
//     const { teamId } = req.params;

//     let team = Team.findById(teamId).populate("teamLeader").exec();

//     MailSender(team.teamLeader.email, "Request to join team", `<p> I want to join your team </p>
//     <form method="PATCH" action="http://localhost:8080/hackmate/v1/team/:${teamId}">
//         <button>Accept </button>
//     `)

// }

