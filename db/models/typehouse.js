"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeHouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.House, { foreignKey: "typeHouseId" });
    }
  }
  TypeHouse.init(
    {
      typeHouseName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TypeHouse",
    }
  );
  return TypeHouse;
};
