const express = require("express");
const router = express.Router();
const { isValidRole, isValidUser } = require("../middlewares/AuthMiddleware");

const {
  editUser,
  getAllUsers,
  editPassword,
  deleteUser,
  deleteMyAccount,
} = require("../controllers/UserControllers");

router.patch("/profile", isValidUser(), editUser);
router.patch("/password", isValidUser(), editPassword);
router.get("/all", isValidRole(1), getAllUsers);
router.delete("/delete", isValidRole(1), deleteUser);
router.delete("/profile", isValidUser(), deleteMyAccount);

module.exports = router;
