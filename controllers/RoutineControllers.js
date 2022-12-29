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
      message: "Routine created"
    })
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createRoutine
};
