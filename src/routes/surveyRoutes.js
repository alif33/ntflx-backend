const router = require("express").Router()
const { getAll, addSurvey } = require("../controllers/surveyController")

router.get('/', getAll);
router.post('/', addSurvey);

module.exports = router
