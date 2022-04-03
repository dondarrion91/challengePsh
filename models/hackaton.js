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
      Hackaton.associate = (models) => {
        Hackaton.belongsToMany(models.Developer, {
          foreignKey: 'developerId',
          through: 'DeveloperHackatons',
          as: 'Developer'
        });
      };

      Hackaton.hasOne(models.Ranking, {
        foreignKey: 'hackatonId',
        as: 'Ranking',
        onDelete: 'CASCADE'
      });
    }
  }
  Hackaton.init({
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    prize: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hackaton',
  });
  return Hackaton;
};