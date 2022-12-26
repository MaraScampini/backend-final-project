'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('roles', [{
       id_role: 1,
      name: "admin"
     },
    {
      id_role: 2,
      name: "user"
    }], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', null, {});

  }
};
