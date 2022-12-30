const express = require("express");
const { getExercise, getAllExercises, getExerciseByMaterial } = require("../controllers/ExercisesControllers");
const router = express.Router();

router.get("/", getAllExercises);
router.get("/:id", getExercise)
router.get("/material/:material", getExerciseByMaterial);

module.exports = router;
