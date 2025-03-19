const mongoose = require("mongoose")

const reactionSchema = new mongoose.Schema(
    {   
        react: {
            type: String,
            enum : ['excellent', "good", "neutral", "poor", "terrible"]
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Reaction", reactionSchema)