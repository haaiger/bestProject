/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FeedBacks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FeedBacks.init(
    {
      name: DataTypes.STRING,
      number: DataTypes.INTEGER,
      email: DataTypes.STRING,
      question: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'FeedBacks',
    }
  );
  return FeedBacks;
};
