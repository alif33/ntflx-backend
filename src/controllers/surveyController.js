const Survey = require('../model/Survey')

exports.getAll = async(req, res) => {
    try {
        const surveys = await Survey.find({}).sort({ createdAt: -1 });
        res.status(200).send(surveys);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching surveys', error });
    }
}

exports.addSurvey = async(req, res) => {
    const { 
        salad_rating,
        food_rating,
        comment 
    } = req.body;

    try {
        const newSurvey = new Survey({
            salad_rating,
            food_rating,
            comment
        });

        await newSurvey.save();

        res.status(201).send({
            success: true,
            message: 'Survey added successfully',
        });
       
    } catch (error) {
        res.status(500).send({
            message: 'Error adding survey',
            error
        });
    }
}

exports.deleteAllSurveys = async (req, res) => {
    try {
        await Survey.deleteMany({}); // Deletes all documents in the collection
        res.status(200).send({
            success: true,
            message: 'All surveys deleted successfully',
        });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting surveys', error });
    }
};