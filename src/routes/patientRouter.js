const express = require("express");
const patientRouter = express.Router();
const patientController = require("../controllers/patientController");

patientRouter.get("/listAllPatients", patientController.listAllPatients);
patientRouter.post(
  "/searchPatientByName",

  patientController.searchPatientByName
);
patientRouter.post("/newPatient", patientController.newPatient);
patientRouter.delete("/deletePatient/:id", patientController.deletePatient);
patientRouter.put("/updatePatient", patientController.updatePatient);
patientRouter.post(
  "/searchPatientByPhysician",
  patientController.searchPatientByPhysician
);

module.exports = patientRouter;
