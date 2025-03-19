const Reaction = require('../model/Reaction')

exports.getAll = async(req, res) => {
    try {
        const reactions = await Reaction.find({}).sort({ createdAt: -1 });
        res.status(200).send(reactions);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching Reactions', error });
    }
}

exports.addReaction = async(req, res) => {
    const { react } = req.body;

    try {
        const newReaction = new Reaction({
            react,
            rating
        });

        await newReaction.save();

        res.status(201).send({
            success: true,
            message: 'Reaction added successfully',
        });
       
    } catch (error) {
        res.status(500).send({
            message: 'Error adding reaction',
            error
        });
    }
}

exports.deleteAllReactions = async (req, res) => {
    try {
        await Reaction.deleteMany({}); // Deletes all documents in the collection
        res.status(200).send({
            success: true,
            message: 'All reactions deleted successfully',
        });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting reactions', error });
    }
};