'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
    'Categories',
    [
      {
        name: 'PC Gamer',
      },
      {
        name: 'Periféricos',
      },
      {
        name: 'Monitor Gamer',
      },
      {
        name: 'Escritório',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {})
  }
};