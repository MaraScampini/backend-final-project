const express = require("express");
const {
  createRoutine,
  getMyRoutines,
  getPublicRoutines,
  deleteRoutine,
  editRoutine,
} = require("../controllers/RoutineControllers");
const router = express.Router();

router.post("/new", createRoutine);
router.get("/all", getMyRoutines);
router.get("/public", getPublicRoutines);
router.delete("/delete", deleteRoutine);
router.patch("/edit", editRoutine);

module.exports = router;
