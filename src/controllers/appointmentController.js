const Appointment = require("../models/Appointment");
const Physician = require("../models/Physician");
const Patient = require("../models/Patient");
const Sequelize = require("sequelize");

module.exports = {

  async newAppointment(req, res) {
    const { physicianId, patientId, appointmentDate, description } = req.body;
    if (!physicianId || !patientId || !appointmentDate, !description) {
      res.status(400).json({
        msg: "Dados obrigatórios não foram preenchidos.",
      });
    }
    let id = physicianId;

    //Procurar no BD se médico existe
    const physicianExist = await Physician.findOne({
      where: { id },
    });

    id = patientId;
    //Procurar no BD se paciente existe
    const PatientExist = await Patient.findOne({
      where: { id },
    });

    if (!PatientExist && !physicianExist)
      res.status(403).json({ msg: "Paciente ou médico não existem." });
    else {
      const patient = await Appointment.create({
        physicianId, 
        patientId, 
        appointmentDate, 
        description
      }).catch((error) => {
        res.status(500).json({ msg: "Não foi possível inserir os dados." });
      });
      if (patient)
        res.status(201).json({ msg: "Nova consulta foi adicionada." });
      else
        res
          .status(404)
          .json({ msg: "Não foi possível cadastrar nova consulta." });
    }
  },
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
        msg: "Campo vazio.",
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

  async deleteAppointment(req, res) {
    const appointmentId = req.params.id;
    const deletedAppointment = await Appointment.destroy({
      where: { id: appointmentId },
    }).catch(async (error) => {
      const patientHasRef = await Appointment.findOne({
        where: { appointmentId },
      }).catch((error) => {
        res.status(500).json({ msg: "Falha na conexão." });
      });
    });
    if (deletedAppointment != 0)
      res.status(200).json({ msg: "Consulta excluida com sucesso." });
    else res.status(404).json({ msg: "Consulta não encontrada." });
  },
};
