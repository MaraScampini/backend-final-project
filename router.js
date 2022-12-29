const express = require("express");
const { authBearerMiddleware } = require("./middlewares/authMiddleware");
const router = express.Router();

const AuthRoutes = require("./routes/AuthRoutes");
const UserRoutes = require("./routes/UserRoutes");

router.use("/auth", AuthRoutes);
router.use(authBearerMiddleware)
router.use("/user", UserRoutes)
module.exports = router;
