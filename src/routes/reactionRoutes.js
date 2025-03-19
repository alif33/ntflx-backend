const router = require("express").Router()
const { getAll, addReaction } = require("../controllers/reactionController")

router.get('/', getAll);
router.post('/', addReaction);

module.exports = router
