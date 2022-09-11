const express = require("express");
const router = express.Router();

// Importamos los controladores
const loginControllers = require("../db/login/login.controllers");

// Importamos los DTO
const {
  getVerificaLoginDTO,  
} = require("../db/login/login.models");


router.get("/", (req, res) => {
  res.send("Te encontras en el login");
});

router.get(
  "/verifica-login/",
  getVerificaLoginDTO,
  loginControllers.getVerificaLoginController
);

module.exports = router;
