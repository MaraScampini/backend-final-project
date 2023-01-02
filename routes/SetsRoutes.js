const express = require("express");
const { newSet } = require("../controllers/SetsControllers");
const router = express.Router();

router.post("/new", newSet)

module.exports = router;
