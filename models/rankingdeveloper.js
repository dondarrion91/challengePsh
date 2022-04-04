'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RankingDeveloper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RankingDeveloper.init({
    developerId: DataTypes.INTEGER,
    rankingId: DataTypes.INTEGER,
    position: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RankingDeveloper',
  });

  RankingDeveloper.associate = (models) => {
    RankingDeveloper.belongsTo(models.Ranking, {
      foreignKey: 'rankingId'
    });
    RankingDeveloper.belongsTo(models.Developer, {
      foreignKey: 'developerId'
    });
  }
  return RankingDeveloper;
};