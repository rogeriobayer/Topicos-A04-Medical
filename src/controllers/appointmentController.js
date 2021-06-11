const Appointment = require("../models/Appointment");
const Sequelize = require("sequelize");

module.exports = {
  async listAllAppointments(req, res) {
    const appointments = await Appointment.findAll({
      appointments: [["physicianId", "ASC"]],
    }).catch((error) => {
      res.status(500).json({ msg: "Falha na conexão." });
    });
    if (appointments) res.status(200).json({ appointments });
    else
      res.status(404).json({ msg: "Não foi possível encontrar atendimentos." });
  },
  async searchAppointmentsByDate(req, res) {
    const { startDate, endDate } = req.body;
    if (!startDate || !endDate)
      res.status(400).json({
        msg: "Parâmetro obrigatório vazio.",
      });
    const Op = Sequelize.Op;
    const appointments = await Appointment.findAll({
      where: { saleDate: { [Op.between]: [startDate, endDate] } },
    }).catch((error) => res.status(500).json({ msg: "Falha na conexão." }));
    if (appointments) {
      if (appointments == "")
        res.status(404).json({ msg: "Não há atendimentos no período." });
      else res.status(200).json({ appointments });
    } else
      res.status(404).json({ msg: "Não foi possível encontrar atendimentos." });
  },
  async searchAppointmentsByPhysician(req, res) {
    const physicianId = req.params.physicianId;
    if (!physicianId)
      res.status(400).json({
        msg: "Campo vendedor vazio.",
      });

    //Checar se physician existe

    const appointments = await Appointment.findAll({
      where: { physicianId },
    }).catch((error) => res.status(500).json({ msg: "Falha na conexão." }));
    if (appointments) {
      if (appointments == "")
        res.status(404).json({ msg: "Não há atendimentos para este médico." });
      else res.status(200).json({ appointments });
    } else
      res.status(404).json({ msg: "Não foi possível encontrar atendimentos." });
  },

  async searchAppointmentsByPatient(req, res) {
    const patientId = req.params.patientId;
    if (!patientId)
      res.status(400).json({
        msg: "Campo vendedor vazio.",
      });

    //Checar se patient existe

    const appointments = await Appointment.findAll({
      where: { patientId },
    }).catch((error) => res.status(500).json({ msg: "Falha na conexão." }));
    if (appointments) {
      if (appointments == "")
        res
          .status(404)
          .json({ msg: "Não há atendimentos para este paciente." });
      else res.status(200).json({ appointments });
    } else
      res.status(404).json({ msg: "Não foi possível encontrar atendimentos." });
  },
};
