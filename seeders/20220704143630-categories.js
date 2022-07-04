'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
    'Categories',
    [
      {
        title: 'PC Gamer',
      },
      {
        title: 'Periféricos',
      },
      {
        title: 'Monitor Gamer',
      },
      {
        title: 'Escritório',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {})
  }
};