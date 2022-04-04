'use strict';

const axios = require("axios");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     const { data } = await axios.get("https://randomuser.me/api?results=300");

     const developerMockData = data.results.map((data) => ({
       firstName: data.name.first,
       lastName: data.name.last,
       gender: data.gender,
       country: data.location.country,
       email: data.email,
       image: data.picture.medium,
     }));

     await queryInterface.bulkInsert("Developers", developerMockData, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
