const Sequelize = require("sequelize");
const dbConfig = require("./config/dbconfig");

const Patient = require("../models/Patient");
const Physician = require("../models/Physician");
const Appointment = require("../models/Appointment");

const connection = new Sequelize(dbConfig);

// Inicialize os modelos para o sequelize
Patient.init(connection);
Physician.init(connection);
Appointment.init(connection);

// Defina os relacionamentos entre os modelos
Patient.associate(connection.models);
Physician.associate(connection.models);
Appointment.associate(connection.models);

module.exports = connection;
