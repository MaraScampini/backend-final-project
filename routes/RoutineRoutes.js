const express = require("express");
const { createRoutine, getMyRoutines, getPublicRoutines } = require("../controllers/RoutineControllers");
const router = express.Router();

router.post("/new", createRoutine)
router.get("/all", getMyRoutines);
router.get("/public", getPublicRoutines);

module.exports = router;
