'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
    'ProductCategories',
    [
      {
        product_id:1,
        category_id:1
      },
      {
        product_id:2,
        category_id:1
      },
      {
        product_id:3,
        category_id:1
      },
      {
        product_id:4,
        category_id:2
      },
      {
        product_id:5,
        category_id:2
      },
      {
        product_id:6,
        category_id:3
      },
      {
        product_id:7,
        category_id:3
      },
      {
        product_id:8,
        category_id:4
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductCategories', null, {})
  }
};