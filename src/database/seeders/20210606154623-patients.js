"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Patients",
      [
        {
          name: "Gustavo Schwanka",
          email: "gust@mail.com",
          phone: "9999-9999",
        },
        {
          name: "Fernando Dunaiski",
          email: "fern@mail.com",
          phone: "8888-8888",
        },
        {
          name: "Rogério Bayer",
          email: "roge@mail.com",
          phone: "7777-7777",
        },
        {
          name: "Marcela Lima",
          email: "marc@mail.com",
          phone: "6666-6666",
        },
        {
          name: "Paula Souza",
          email: "souz@mail.com",
          phone: "5555-5555",
        },
        {
          name: "Ana Julia",
          email: "anaj@mail.com",
          phone: "4444-4444",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Patients", null, {});
  },
};
