const router = require("express").Router();

const scoreBoardController = require("../controllers/scoreBoard.controller");
router.post("/list", scoreBoardController.getAll); // Route for retrive all scroring of player

module.exports = router;
