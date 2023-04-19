/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class feedback extends Model {
    static associate(models) {}
  }
  feedback.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      number: DataTypes.STRING,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "feedback",
    },
  );
  return feedback;
};
