const models = require("../models/index");
require("dotenv").config();

const createRoutine = async (req, res) => {
  try {
    const routine = req.body;
    let newRoutine = await models.routines.create({
      name: routine.name,
      public: routine.public,
      userIdUser: req.auth.id,
    });
    res.json({
      newRoutine,
      message: "Routine created",
    });
  } catch (error) {
    console.error(error);
  }
};

const getMyRoutines = async (req, res) => {
  try {
    let routines = await models.routines.findAll({
      where: {
        userIdUser: req.auth.id,
      },
      include: {
        model: models.exercises,
        through: {
          attributes: [],
        },
      },
    });
    res.json({
      message: "These are your routines",
      routines,
    });
  } catch (error) {}
};

const getPublicRoutines = async (req, res) => {
  try {
    let routines = await models.routines.findAll({
      where: {
        public: true,
      },
    });
    res.json({
      message: "These are all the public routines",
      routines,
    });
  } catch (error) {}
};

const deleteRoutine = async (req, res) => {
  try {
    let routineId = req.body.routine;
    const routine = await models.routines.findOne({
      where: {
        id_routine: routineId,
      },
    });
    if (routine.userIdUser !== req.auth.id) {
      res.json({
        message: "You cannot delete routines made by other users",
      });
    } else {
      await models.routines.destroy({
        where: {
          id_routine: routineId,
        },
      });
      res.json({
        message: "Routine deleted",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const editRoutine = async (req, res) => {
  try {
    let routineId = req.body.routine;
    const routine = await models.routines.findOne({
      where: {
        id_routine: routineId,
      },
    });
    if (routine.userIdUser !== req.auth.id) {
      res.json({
        message: "You cannot edit routines made by other users",
      });
    } else {
      await models.routines.update(
        {
          name: req.body.name,
          public: req.body.public,
        },
        {
          where: {
            id_routine: routineId,
          },
        }
      );
      res.json({
        message: "Routine edited",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const getRoutine = async (req, res) => {
  try {
    let routine = await models.routines.findOne({
      where: {
        id_routine: req.params.id,
      },
      include: {
        model: models.exercises,
        through: {
          attributes: [],
        },
      },
    });
    res.json({
      routine,
    });
  } catch (error) {}
};

module.exports = {
  createRoutine,
  getMyRoutines,
  getPublicRoutines,
  deleteRoutine,
  editRoutine,
  getRoutine,
};
