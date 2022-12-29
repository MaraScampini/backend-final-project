const express = require("express");
const router = express.Router();
const {
  isValidRole,
  isValidUser,
} = require("../middlewares/AuthMiddleware");

const {
  editUser, getAllUsers
} = require ('../controllers/UserControllers');

router.patch("/profile", isValidUser(), editUser);
router.get("/all", isValidRole(1), getAllUsers);

module.exports = router;