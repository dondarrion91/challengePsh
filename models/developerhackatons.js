'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeveloperHackatons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DeveloperHackatons.associate = (models) => {
        DeveloperHackatons.belongsTo(models.Hackaton, {
          foreignKey: 'hackatonId',
          as: 'Hackaton'
        });
        DeveloperHackatons.belongsTo(models.Developer, {
          foreignKey: 'developerId',
          as: 'Developer'
        });
      };
    }
  }
  DeveloperHackatons.init({
    hackatonId: DataTypes.INTEGER,
    developerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DeveloperHackatons',
  });
  return DeveloperHackatons;
};