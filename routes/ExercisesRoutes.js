const express = require("express");
const { getExercise } = require("../controllers/ExercisesControllers");
const router = express.Router();

router.get("/:id", getExercise)

module.exports = router;
