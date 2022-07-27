'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Faisal Seraj',
        phone: '03479728070',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hassan Jafri',
        phone: '03130938150',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
