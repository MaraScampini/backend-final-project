const express = require("express");
const { createRoutine } = require("../controllers/RoutineControllers");
const router = express.Router();

router.post("/new", createRoutine)

module.exports = router;
