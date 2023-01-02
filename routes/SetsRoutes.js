const express = require("express");
const { newSet, editSet } = require("../controllers/SetsControllers");
const router = express.Router();

router.post("/new", newSet)
router.patch("/edit", editSet);

module.exports = router;
