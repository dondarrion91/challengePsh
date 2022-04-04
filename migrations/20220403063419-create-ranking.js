'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rankings', {
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rankings');
  }
};