const { param, body, query } = require("express-validator");

const getInfoUsuarioDTO = [
  param("idUsuario")
    .exists()
    .isInt()
    .notEmpty()
    .withMessage("El idUsuario es requerido"),
];

const postCrearUsuarioDTO = [
  body("user")
    .exists()
    .isString()
    .notEmpty()
    .withMessage("El user es requerido"),
  body("password")
    .exists()
    .isString()
    .notEmpty()
    .withMessage("El password es requerido"),
  body("correo")
    .exists()
    .isString()
    .notEmpty()
    .withMessage("El correo es requerido"),
];

const patchModificarUsuarioDTO = [
  query("idUsuario")
    .exists()
    .isInt()
    .notEmpty()
    .withMessage("El idUsuario es requerido"),
  body("user")
    .exists()
    .isString()
    .notEmpty()
    .withMessage("El user es requerido"),
  body("password")
    .exists()
    .isString()
    .notEmpty()
    .withMessage("El password es requerido"),
  body("correo")
    .exists()
    .isString()
    .notEmpty()
    .withMessage("El correo es requerido"),
];

module.exports = {
  getInfoUsuarioDTO,
  postCrearUsuarioDTO,
  patchModificarUsuarioDTO,
};
