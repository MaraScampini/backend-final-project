const express = require("express");
const { getExercise, getAllExercises, getExerciseByMaterial, getExerciseByMuscle, getExerciseByName } = require("../controllers/ExercisesControllers");
const router = express.Router();

router.get("/", getAllExercises);
router.get("/:id", getExercise)
router.get("/material/:material", getExerciseByMaterial);
router.get("/muscle/:muscle", getExerciseByMuscle);
router.get("/name/:name", getExerciseByName);

module.exports = router;
