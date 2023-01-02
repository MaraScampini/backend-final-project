const express = require("express");
const { newSet, editSet, getSets } = require("../controllers/SetsControllers");
const router = express.Router();

router.post("/new", newSet)
router.patch("/edit", editSet);
router.get("/:exercise", getSets)

module.exports = router;
