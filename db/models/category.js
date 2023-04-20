/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {}
  }
  Category.init(
    {
      rentPeriod: DataTypes.STRING,
      typeHouse: DataTypes.STRING,
      region: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    },
  );
  return Category;
};
