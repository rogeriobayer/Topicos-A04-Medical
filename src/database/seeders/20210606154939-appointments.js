"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Appointments",
      [
        {
          physicianId: 1,
          patientId: 1,
          appointmentDate: "2021-06-06",
          description: "Corte profundo",
        },
        {
          physicianId: 1,
          patientId: 2,
          appointmentDate: "2021-06-03",
          description: "Choque eletrico",
        },
        {
          physicianId: 2,
          patientId: 3,
          appointmentDate: "2021-06-01",
          description: "Picada de inseto",
        },
        {
          physicianId: 2,
          patientId: 4,
          appointmentDate: "2021-06-04",
          description: "Mordida de cachorro",
        },
        {
          physicianId: 3,
          patientId: 5,
          appointmentDate: "2021-06-07",
          description: "Febre alta",
        },
        {
          physicianId: 3,
          patientId: 6,
          appointmentDate: "2021-06-08",
          description: "Alergia forte",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Appointments", null, {});
  },
};
