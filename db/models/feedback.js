'use strict';
<<<<<<<< HEAD:db/models/feedBacks.js
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeedBacks extends Model {
========
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feedback extends Model {
>>>>>>>> main:db/models/feedback.js
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
<<<<<<<< HEAD:db/models/feedBacks.js
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
========
  feedback.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    number: DataTypes.STRING,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'feedback',
  });
  return feedback;
};
>>>>>>>> main:db/models/feedback.js
