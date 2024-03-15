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
        let teamArray=[];

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
            teams:teamArray
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

// exports.updateOpportunity = async (req, res) => {
//     let { id } = req.params;

//     try {
//         let opportunity = await Opportunity.findById(id);

//         if (!opportunity) {
//             return res.status(404).json({
//                 success: false,
//                 message: "No Opportunity Listed"
//             });
//         }

//         const {
//             name,
//             idea,
//             skillsPreffered,
//             noOfMembers,
//             teamLeader
//             // Add other fields as needed
//         } = req.body;

//         // Update team fields if provided in the request body
//         if (name) team.name = name;
//         if (idea) team.idea = idea;
//         if (skillsPreffered) team.skillsPreffered = skillsPreffered;
//         if (noOfMembers) team.noOfMembers = noOfMembers;
//         if (teamLeader) team.teamLeader = teamLeader;
//         // Add other fields as needed

//         // Save the updated team
//         await team.save();

//         // Check if the teamId is provided
//         if (!teamId) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Team ID is required"
//             });
//         }

//         // Add the new team to the teams array
//         opportunity.teams.push(teamId);
        
//         // Save the updated opportunity
//         await opportunity.save();

//         return res.status(200).json({
//             success: true,
//             message: "Opportunity updated successfully",
//             opportunity
//         });
//     } catch (error) {
//         console.error("Error updating opportunity:", error);
//         return res.status(500).json({
//             success: false,
//             message: "Internal server error"
//         });
//     }
// };