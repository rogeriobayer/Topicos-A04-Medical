const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointmentController");

appointmentRouter.get(
  "/listAllAppointments",
  appointmentController.listAllAppointments
);
appointmentRouter.post(
  "/searchAppointmentsByDate",
  appointmentController.searchAppointmentsByDate
);
appointmentRouter.get(
  "/searchAppointmentsByPatient/:patientId",
  appointmentController.searchAppointmentsByPatient
);
appointmentRouter.get(
  "/searchAppointmentsByPhysician/:physicianId",
  appointmentController.searchAppointmentsByPhysician
);

module.exports = appointmentRouter;
