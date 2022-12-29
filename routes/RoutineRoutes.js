const express = require("express");
const {
  createRoutine,
  getMyRoutines,
  getPublicRoutines,
  deleteRoutine,
} = require("../controllers/RoutineControllers");
const router = express.Router();

router.post("/new", createRoutine);
router.get("/all", getMyRoutines);
router.get("/public", getPublicRoutines);
router.delete("/delete", deleteRoutine);

module.exports = router;
