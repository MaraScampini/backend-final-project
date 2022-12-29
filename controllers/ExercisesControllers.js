const models = require("../models/index");
require("dotenv").config();

const getExercise = async (req, res) => {
  let exercise = await models.exercises.findOne({
    where: {
      id_exercise: req.params.id
    }
  })
  res.json({
    exercise
  })
}

module.exports = {
 getExercise
};