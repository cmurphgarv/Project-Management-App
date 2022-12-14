const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { addDays } = require("../utils/helpers");
const createDeadline = require("../utils/helpers");
const moment = require("moment");

class Task extends Model { }

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },

    }
  },
  {
    hooks: {
      beforeCreate: (newTaskData) => {
        newTaskData.deadline = new Date(newTaskData.deadline);
        return newTaskData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "task",
  }
);

module.exports = Task;
