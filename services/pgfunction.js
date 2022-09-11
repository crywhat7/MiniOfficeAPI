const pg = require("../configuration/pg-connection");

const pgFunction = async (schema, funcion, params) => {
  if (typeof funcion !== "string" || typeof schema !== "string") {
    throw new Error("La funcion debe ser un string");
  }

  if (!Array.isArray(params)) {
    throw new Error("Los parametros deben ser un array");
  }

  try {
    return (await pg.func(`${schema}.${funcion}`, params))[0][funcion];
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { pgFunction };
