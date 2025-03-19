const router = require("express").Router()
const { getAll, addFeedback, deleteAllFeedback } = require("../controllers/feedbackController")

router.get('/', getAll);
router.post('/', addFeedback);
router.delete('/', deleteAllFeedback);

module.exports = router
