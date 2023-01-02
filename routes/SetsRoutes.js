const express = require("express");
const { newSet, editSet, getSetsByRoutine, deleteSet } = require("../controllers/SetsControllers");
const router = express.Router();

router.post("/new", newSet)
router.patch("/edit", editSet);
router.get("/:routine", getSetsByRoutine)
router.delete("/delete", deleteSet)

module.exports = router;
