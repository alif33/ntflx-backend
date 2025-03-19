const router = require("express").Router()
const { getAll, addReaction, deleteAllReactions } = require("../controllers/reactionController")

router.get('/', getAll);
router.post('/', addReaction);
router.delete('/', deleteAllReactions);

module.exports = router
