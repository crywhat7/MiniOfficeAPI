const express = require("express");
const router = express.Router();

// Importamos los controladores
const usersControllers = require("../db/users/users.controllers");

// Importamos los DTO
const {
  getInfoUsuarioDTO,
  patchModificarUsuarioDTO,
  postCrearUsuarioDTO,
} = require("../db/users/users.models");

router.get("/", (req, res) => {
  res.send("Te encontras en users");
});

router.get(
  "/info-usuario/:idUsuario",
  getInfoUsuarioDTO,
  usersControllers.getInfoUsuarioController
);

router.post(
  "/crear-usuario/",
  postCrearUsuarioDTO,
  usersControllers.postCrearUsuarioController
);

router.patch(
  "/modifica-usuario/",
  patchModificarUsuarioDTO,
  usersControllers.patchModificaUsuarioController
);

module.exports = router;
