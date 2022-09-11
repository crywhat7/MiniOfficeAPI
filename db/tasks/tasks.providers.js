const { pgFunction } = require("../../services/pgfunction");
const pg = require("../../configuration/pg-connection");

const schema = "public";

exports.getTareasByUser = async (idUsuario) => {
  try {
    // const nombreFuncion = "ft_ma_devuelve_tareas_segun_autor";

    // const res = await pg.func(`${schema}.${nombreFuncion}`, [
    //   idUsuario,
    // ]);

    // console.log('Respuesta:', res[0]['ft_ma_devuelve_tareas_segun_autor']);
    // return res[0]["ft_ma_devuelve_tareas_segun_autor"];
    return await pgFunction(schema, "ft_ma_devuelve_tareas_segun_autor", [
      idUsuario,
    ]);
  } catch (error) {
    console.error("getTareasByUser", error);
    throw new Error(error);
  }
};
