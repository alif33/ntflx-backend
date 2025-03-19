const router = require("express").Router()
const { getAll, addFeedback } = require("../controllers/feedbackController")

router.get('/', getAll);
router.post('/', addFeedback);

module.exports = router
