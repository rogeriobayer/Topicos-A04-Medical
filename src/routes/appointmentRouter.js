const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointmentController");
const auth = require("../middlewares/auth");

appointmentRouter.get(
  "/listAllAppointments",
  auth,
  appointmentController.listAllAppointments
);
appointmentRouter.post(
  "/searchAppointmentsByDate",
  auth,
  appointmentController.searchAppointmentsByDate
);
appointmentRouter.get(
  "/searchAppointmentsByPatient/:patientId",
  auth,
  appointmentController.searchAppointmentsByPatient
);
appointmentRouter.get(
  "/searchAppointmentsByPhysician/:physicianId",
  auth,
  appointmentController.searchAppointmentsByPhysician
);
appointmentRouter.delete(
  "/deleteAppointment/:id",
  auth,
  appointmentController.deleteAppointment
);

appointmentRouter.post(
  "/newAppointment",
  auth,
  appointmentController.newAppointment
);

module.exports = appointmentRouter;
