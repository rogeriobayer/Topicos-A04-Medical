const express = require("express");
const physicianRouter = express.Router();
const physicianController = require("../controllers/physicianController");
const auth = require("../middlewares/auth");

physicianRouter.post("/authentication", physicianController.authentication);
physicianRouter.get(
  "/listAllPhysicians",
  auth,
  physicianController.listAllPhysicians
);
physicianRouter.post(
  "/searchPhysicianByName",
  auth,
  physicianController.searchPhysicianByName
);
physicianRouter.post("/newPhysician", auth, physicianController.newPhysician);
physicianRouter.delete(
  "/deletePhysician/:id",
  auth,
  physicianController.deletePhysician
);
physicianRouter.put(
  "/updatePhysician",
  auth,
  physicianController.updatePhysician
);
physicianRouter.get("/logout", auth, physicianController.logout);

module.exports = physicianRouter;
