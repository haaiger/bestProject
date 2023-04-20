const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    static associate(models) {
      this.hasMany(models.Favorite, { foreignKey: "houseId" });
      this.hasMany(models.RentOrder, { foreignKey: "houseId" });
    }
  }
  House.init(
    {
      rentPeriod: DataTypes.STRING,
      typeHouse: DataTypes.STRING,
      region: DataTypes.STRING,
      price: DataTypes.INTEGER,
      rooms: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      photo: DataTypes.STRING,
      address: DataTypes.STRING,
      geoTag: DataTypes.STRING,
      isRent: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "House",
    },
  );
  return House;
};
