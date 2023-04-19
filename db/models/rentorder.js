const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class RentOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.House, { foreignKey: "houseId" });
    }
  }
  RentOrder.init(
    {
      userId: DataTypes.INTEGER,
      houseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "RentOrder",
    }
  );
  return RentOrder;
};