const mongoose = require("mongoose")

const reactionSchema = new mongoose.Schema(
    {   
        react: {
            type: String,
            enum : ['excellent', "good", "neutral", "poor", "terrible"]
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Reaction", reactionSchema)