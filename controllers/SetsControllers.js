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
        reps: 0 || set.reps,
        weight: 0 || set.weight,
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

const getSetsByRoutine = async (req, res) => {
  try {
    const routineFound = await models.routines.findOne({
      where: {
        id_routine: req.params.routine,
      },
    });
    if(routineFound.userIdUser === req.auth.id){
      const sets = await models.sets.findAll({
        where: {
          routineIdRoutine: req.params.routine,
        },
      });

      res.json({
        message: "Sets retrieved",
        sets,
      });
    } else {
      res.json({
        message: "You cannot see sets from a routine that is not yours"
      })
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteSet = async (req, res) => {
  try {
    const set = req.body;
    const routineFound = await models.routines.findOne({
      where: {
        id_routine: set.routine,
      },
    });
    if(routineFound.userIdUser === req.auth.id){
      await models.sets.destroy({
        where: {
          id_set: set.id,
          routineIdRoutine: set.routine 
        }
      })
      res.json({
        message: "Set deleted"
      })
    } else {
      res.json({
        message: "You cannot delete sets from routines that are not yours"
      })
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  newSet,
  editSet,
  getSetsByRoutine,
  deleteSet
};
