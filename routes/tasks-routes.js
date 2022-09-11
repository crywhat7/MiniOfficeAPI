const express = require("express");
const router = express.Router();

// Importamos los controladores
const tareasController = require("../db/tasks/tasks.controller");

// Importamos los DTO
const { getTareasByUserDTO } = require("../db/tasks/tasks.models");

router.get("/", (req, res) => {
  res.send("Te encontras en tareas");
});

router.get(
  "/tasks",
  getTareasByUserDTO,
  tareasController.getTareasByUserController
);

router.get("/tasks/:id", (req, res) => {
  res.send("Detalle de la tarea");
});

module.exports = router;
