const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    regDeadline: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mode: {
        type: "String",
        enum: ["Online", "Offline"],
        message:
            "Please select appropriate mode, either online or offline",
        required: true
    },
    rewards: {
        type: String
    },
    FAQs: [{
        type: String
    }],
    contactDetails: {
        type: Number
    },
    eligibility: {
        yearOfGraduation: {
            type: Number
        },
        age: {
            type: Number
        },
        teamMembersNumber: {
            type: Number
        },
        interYearAllowed: {
            type: Boolean
        },
        interCollegeAllowed: {
            type: Boolean
        },
    },
    noOfRounds: {
        type: Number,
        required: true
    },
    teams : [{
        type: mongoose.Schema.ObjectId,
        ref: "Team"
    }
    ],
    timeline: [{
        type: String
    }]

});

module.exports = mongoose.model("Opportunity", opportunitySchema)