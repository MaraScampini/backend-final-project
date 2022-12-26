"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sets.init(
    {
      id_set: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      reps: DataTypes.INTEGER,
      weight: DataTypes.FLOAT,
      routineIdRoutine: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      exerciseIdExercise: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "sets",
    }
  );
  return sets;
};
