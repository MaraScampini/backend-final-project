"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class routines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      routines.belongsTo(models.users);
      routines.belongsToMany(models.exercises, { through: {model: models.sets, unique: false} });
    }
  }
  routines.init(
    {
      id_routine: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      userIdUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "routines",
    }
  );
  return routines;
};
