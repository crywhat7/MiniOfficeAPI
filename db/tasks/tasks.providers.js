const { pgFunction } = require("../../services/pgfunction");
const pg = require("../../configuration/pg-connection");

const schema = "public";

exports.getTareasByUser = async (idUsuario) => {
  try {
    return await pgFunction(schema, "ft_ma_devuelve_tareas_segun_autor", [
      idUsuario,
    ]);
  } catch (error) {
    console.error("getTareasByUser", error);
    throw new Error(error);
  }
};
