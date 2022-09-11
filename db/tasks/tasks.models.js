const { query } = require("express-validator");

const getTareasByUserDTO = [
  query("idAutor")
    .exists()
    .isInt()
    .notEmpty()
    .withMessage("El id del autor es requerido"),
];

module.exports = { getTareasByUserDTO };
