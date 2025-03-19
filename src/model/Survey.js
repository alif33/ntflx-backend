const mongoose = require("mongoose")

const surveySchema = new mongoose.Schema(
    {   
        salad_rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        food_rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comments: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Survey", surveySchema)