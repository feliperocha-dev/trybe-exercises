'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [{
      title: 'O Nome do Vento',
      author: 'Patrick Rothfuss',
      page_quantity: 656,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    }], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
  }
};
