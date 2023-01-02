const express = require("express");
const {
  getExercise,
  getAllExercises,
  getExerciseByMaterial,
  getExerciseByMuscle,
  getExerciseByName,
  createExercise,
  editExercise,
} = require("../controllers/ExercisesControllers");
const {
  isValidRole,
  authBearerMiddleware,
} = require("../middlewares/AuthMiddleware");
const router = express.Router();

router.get("/", getAllExercises);
router.get("/:id", getExercise);
router.get("/material/:material", getExerciseByMaterial);
router.get("/muscle/:muscle", getExerciseByMuscle);
router.get("/name/:name", getExerciseByName);
router.use(authBearerMiddleware);
router.use(isValidRole(1));
router.post("/new", createExercise);
router.patch("/edit", editExercise);
module.exports = router;
