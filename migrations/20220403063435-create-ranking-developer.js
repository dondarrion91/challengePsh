'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RankingDevelopers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      developerId: {
        type: Sequelize.INTEGER,
        references: { model: 'Developers', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false
      },
      rankingId: {
        type: Sequelize.INTEGER,
        references: { model: 'Rankings', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false
      },
      position: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RankingDevelopers');
  }
};