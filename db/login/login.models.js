const { query } = require("express-validator");

const getVerificaLoginDTO = [
  query("user")
    .exists()
    .isString()
    .notEmpty()
    .withMessage("El user es requerido"),
  query("password")
    .exists()
    .isString()
    .notEmpty()
    .withMessage("El password es requerido"),
];

module.exports = {
  getVerificaLoginDTO,
};
