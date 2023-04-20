/* eslint-disable strict */

"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.House, { foreignKey: "houseId" });
    }
  }
  Favorite.init(
    {
      userId: DataTypes.INTEGER,
      houseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Favorite",
    },
  );
  return Favorite;
};
