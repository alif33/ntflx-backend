const router = require("express").Router()
const { getAll, addSurvey, deleteAllSurveys } = require("../controllers/surveyController")

router.get('/', getAll);
router.post('/', addSurvey);
router.delete('/', deleteAllSurveys);

module.exports = router
