const express = require("express");
const { newSet, editSet, getSetsByExercise } = require("../controllers/SetsControllers");
const router = express.Router();

router.post("/new", newSet)
router.patch("/edit", editSet);
router.get("/:exercise", getSetsByExercise)

module.exports = router;
