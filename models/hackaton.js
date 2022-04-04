'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hackaton extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hackaton.init({
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Hackaton',
  });

  Hackaton.associate = (models) => {
    Hackaton.hasOne(models.Ranking)
  };
  return Hackaton;
};