"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Physicians",
      [
        {
          name: "José de Oliveira",
          email: "j_oliveira@mail.com",
          password:
            "$2a$12$JJfC0y7pRXTfnhRN2glNreC0siJCWxES9TsvW4s32kRzpjzPMuk92",
        },
        {
          name: "Maria Carla",
          email: "mcaarla@mail.com",
          password:
            "$2a$12$JJfC0y7pRXTfnhRN2glNreC0siJCWxES9TsvW4s32kRzpjzPMuk92",
        },
        {
          name: "Felipe Candido",
          email: "felipe@mail.com",
          password:
            "$2a$12$JJfC0y7pRXTfnhRN2glNreC0siJCWxES9TsvW4s32kRzpjzPMuk92",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Physicians", null, {});
  },
};
