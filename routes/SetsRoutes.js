const express = require("express");
const { newSet, editSet, getSetsByRoutine, deleteSet } = require("../controllers/SetsControllers");
const router = express.Router();

router.post("/new", newSet)
router.patch("/edit", editSet);
router.delete("/delete", deleteSet)
router.get("/:routine", getSetsByRoutine)

module.exports = router;
