const Sequelize = require("sequelize");

class Patient extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Appointment, { foreignKey: "patientId" }); //????
  }
}

module.exports = Patient;
