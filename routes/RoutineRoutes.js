const express = require("express");
const {
  createRoutine,
  getMyRoutines,
  getPublicRoutines,
  deleteRoutine,
  editRoutine,
} = require("../controllers/RoutineControllers");
const { authBearerMiddleware } = require("../middlewares/AuthMiddleware");
const router = express.Router();

router.get("/public", getPublicRoutines);
router.use(authBearerMiddleware);
router.post("/new", createRoutine);
router.get("/all", getMyRoutines);
router.delete("/delete", deleteRoutine);
router.patch("/edit", editRoutine);

module.exports = router;
