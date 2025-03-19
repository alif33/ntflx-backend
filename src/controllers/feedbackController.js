const Feedback = require('../model/Feedback')

exports.getAll = async(req, res) => {
    try {
        const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
        res.status(200).send(feedbacks);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching feedbacks', error });
    }
}

exports.addFeedback = async(req, res) => {
    const { comment } = req.body;

    try {
        const newFeedback = new Feedback({
            comment
        });

        await newFeedback.save();

        res.status(201).send({
            success: true,
            message: 'Feedback added successfully',
        });
       
    } catch (error) {
        res.status(500).send({
            message: 'Error adding feedback',
            error
        });
    }
}
