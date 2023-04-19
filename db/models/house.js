const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Favorite, { foreignKey: "houseId" });
      this.hasMany(models.RentOrder, { foreignKey: "houseId" });
    }
  }
  House.init(
    {
      categoryId: DataTypes.INTEGER,
      typeHouseId: DataTypes.INTEGER,
      regionId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      photo: DataTypes.STRING,
      address: DataTypes.STRING,
      geoTag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "House",
    }
  );
  return House;
};
