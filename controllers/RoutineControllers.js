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
    });
    res.json({
      message: "These are your routines",
      routines,
    });
  } catch (error) {}
};

module.exports = {
  createRoutine,
  getMyRoutines
};
