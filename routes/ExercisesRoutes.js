const express = require("express");
const { getExercise, getAllExercises, getExerciseByMaterial, getExerciseByMuscle } = require("../controllers/ExercisesControllers");
const router = express.Router();

router.get("/", getAllExercises);
router.get("/:id", getExercise)
router.get("/material/:material", getExerciseByMaterial);
router.get("/muscle/:muscle", getExerciseByMuscle);

module.exports = router;
