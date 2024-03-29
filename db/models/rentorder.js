const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class RentOrder extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.House, { foreignKey: "houseId" });
    }
  }
  RentOrder.init(
    {
      userId: DataTypes.INTEGER,
      houseId: DataTypes.INTEGER,
      rentDateStart: DataTypes.STRING,
      rentDateEnd: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RentOrder",
    },
  );
  return RentOrder;
};
