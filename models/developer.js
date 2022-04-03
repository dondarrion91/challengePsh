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
      Developer.associate = (models) => {
        Developer.belongsToMany(models.Hackaton, {
          foreignKey: 'hackatonId',
          through: 'DeveloperHackatons',
          as: 'Hackaton'
        });

        Developer.belongsToMany(models.Ranking, {
          foreignKey: 'rankingId',
          through: 'RankingDeveloper',
          as: 'Ranking'
        });
      };
    }
  }
  Developer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    country: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Developer',
  });
  return Developer;
};