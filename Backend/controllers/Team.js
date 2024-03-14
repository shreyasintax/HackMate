const Team = require("../models/Team");


exports.addTeam = async (req, res) => {
    try {
        const {
            name,
            idea,
            skillsPreffered,
            noOfMembers
        } = req.body;

        if (!name || !idea || !skillsPreffered || !noOfMembers) {
            return res.status(400).json({
                success: false,
                message: "Fill all required details"
            });
        }

        const team = await Team.create({
            name,
            idea,
            skillsPreffered,
            noOfMembers
        });

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

exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find({});

        if (!teams || teams.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No Teams made yet"
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
    const teamId = req.params.id;
    try {
        const updatedTeam = await Team.findOneAndUpdate(
            { _id: teamId },
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


