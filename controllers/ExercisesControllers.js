const models = require("../models/index");
require("dotenv").config();
const { Op } = require("sequelize");

const getExercise = async (req, res) => {
  try {
    let exercise = await models.exercises.findOne({
      where: {
        id_exercise: req.params.id,
      },
    });
    res.json({
      exercise,
    });
  } catch (error) {
    console.error(error);
  }
};

const getAllExercises = async (req, res) => {
  try {
    let exercises = await models.exercises.findAll();
    res.json({
      exercises,
    });
  } catch (error) {
    console.error(error);
  }
};

const getExerciseByMaterial = async (req, res) => {
  try {
    const material = req.params.material;
    let exercises = await models.exercises.findAll({
      where: {
        material: material,
      },
    });
    res.json({
      exercises,
    });
  } catch (error) {
    console.error(error);
  }
};

const getExerciseByMuscle = async (req, res) => {
  try {
    const muscle = req.params.muscle;
    let exercises = await models.exercises.findAll({
      where: {
        main_muscle: muscle,
      },
    });
    res.json({
      exercises,
    });
  } catch (error) {
    console.error(error);
  }
};

const getExerciseByName = async (req, res) => {
  try {
    const name = req.params.name;
    let exercises = await models.exercises.findAll({
      where: {
        name: { [Op.like]: `%${name}%` },
      },
    });
    res.json({
      exercises
    })
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getExercise,
  getAllExercises,
  getExerciseByMaterial,
  getExerciseByMuscle,
  getExerciseByName
};
