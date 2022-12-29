const express = require("express");
const router = express.Router();
const {
  isValidRole,
  isValidUser,
} = require("../middlewares/authMiddleware");

const {
  editUser
} = require ('../controllers/UserControllers');

router.patch("/profile", isValidUser(), editUser);

module.exports = router;