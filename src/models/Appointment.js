const Sequelize = require("sequelize");

class Appointment extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        appointmentDate: Sequelize.DATE,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Patient, { foreignKey: "patientId" });
    this.hasMany(models.Physician, { foreignKey: "physicianId" });
  }
}

module.exports = Appointment;
