const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    oppoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Opportunity"
    },
    teamLeader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    noOfMembers: {
        type: Number,
        required: true
    },
    idea: {
        type: String
    },
    name: {
        type: String
    },
    skillsPreffered: [{
        type: String
    }]
});

module.exports = mongoose.model("Team", teamSchema)