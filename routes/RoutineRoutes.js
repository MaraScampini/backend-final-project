const express = require("express");
const { createRoutine, getMyRoutines } = require("../controllers/RoutineControllers");
const router = express.Router();

router.post("/new", createRoutine)
router.get("/all", getMyRoutines);

module.exports = router;
