const express = require("express");
const {
  createRoutine,
  getMyRoutines,
  getPublicRoutines,
  deleteRoutine,
  editRoutine,
  getRoutine,
} = require("../controllers/RoutineControllers");
const { authBearerMiddleware } = require("../middlewares/AuthMiddleware");
const router = express.Router();

router.get("/public", getPublicRoutines);
router.use(authBearerMiddleware);
router.post("/new", createRoutine);
router.get("/all", getMyRoutines);
router.delete("/delete", deleteRoutine);
router.patch("/edit", editRoutine);
router.get("/:id", getRoutine);

module.exports = router;
