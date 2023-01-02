const express = require("express");
const { authBearerMiddleware } = require("./middlewares/AuthMiddleware");
const router = express.Router();

const AuthRoutes = require("./routes/AuthRoutes");
const UserRoutes = require("./routes/UserRoutes");
const RoutineRoutes = require("./routes/RoutineRoutes");
const ExerciseRoutes = require("./routes/ExercisesRoutes");
const SetsRoutes = require("./routes/SetsRoutes");

router.use("/auth", AuthRoutes);
router.use("/exercise", ExerciseRoutes);
router.use("/routine", RoutineRoutes);
router.use(authBearerMiddleware);
router.use("/user", UserRoutes);
router.use("/set", SetsRoutes)
module.exports = router;
