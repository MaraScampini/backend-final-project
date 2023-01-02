const models = require("../models/index");
require("dotenv").config();

const newSet = async (req, res) => {
  try {
    const set = req.body;
    const routineFound = await models.routines.findOne({
      where: {
        id_routine: set.routine,
      },
    });
    if (routineFound.userIdUser === req.auth.id) {
      const newSet = await models.sets.create({
        reps: 0,
        weight: 0,
        routineIdRoutine: set.routine,
        exerciseIdExercise: set.exercise,
      });
      res.json({
        message: "Set created",
        newSet,
      });
    } else {
      res.json({
        message: "You cannot add sets to a routine that is not yours",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const editSet = async (req, res) => {
  try {
    const set = req.body;
    const routineFound = await models.routines.findOne({
      where: {
        id_routine: set.routine,
      },
    });
    if (routineFound.userIdUser === req.auth.id) {
      const newSet = await models.sets.update(
        {
          reps: set.reps,
          weight: set.weight,
        },
        {
          where: {
            routineIdRoutine: set.routine,
            exerciseIdExercise: set.exercise,
          },
        }
      );
      res.json({
        message: "Set updated",
        newSet,
      });
    } else {
      res.json({
        message: "You cannot edit sets from a routine that is not yours",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  newSet,
  editSet,
};
