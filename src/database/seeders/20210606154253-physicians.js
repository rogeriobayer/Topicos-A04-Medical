"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Physicians",
      [
        {
          name: "José de Oliveira",
          email: "j_oliveira@mail.com",
          password: "123",
        },
        {
          name: "Maria Carla",
          email: "mcaarla@mail.com",
          password: "123",
        },
        {
          name: "Felipe Candido",
          email: "felipe@mail.com",
          password: "123",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Physicians", null, {});
  },
};
