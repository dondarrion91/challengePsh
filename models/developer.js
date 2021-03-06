'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Developer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    image: DataTypes.STRING,
    hackatonPoints: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Developer',
  });

  Developer.associate = (models) => {
    Developer.belongsToMany(models.Ranking, {through: 'RankingDeveloper', foreignKey: 'developerId'})
  };

  return Developer;
};