const express = require("express");
const { authBearerMiddleware } = require("./middlewares/AuthMiddleware");
const router = express.Router();

const AuthRoutes = require("./routes/AuthRoutes");
const UserRoutes = require("./routes/UserRoutes");
const RoutineRoutes = require("./routes/RoutineRoutes");
const ExerciseRoutes = require("./routes/ExercisesRoutes");

router.use("/auth", AuthRoutes);
router.use("/exercise", ExerciseRoutes);
router.use(authBearerMiddleware);
router.use("/user", UserRoutes);
router.use("/routine", RoutineRoutes);
module.exports = router;
