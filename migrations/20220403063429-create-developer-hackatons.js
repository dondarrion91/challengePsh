'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DeveloperHackatons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hackatonId: {
        type: Sequelize.INTEGER,
        references: { model: 'Hackatons', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false
      },
      developerId: {
        type: Sequelize.INTEGER,
        references: { model: 'Developers', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DeveloperHackatons');
  }
};