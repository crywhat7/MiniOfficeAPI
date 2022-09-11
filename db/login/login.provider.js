const { pgFunction } = require("../../services/pgfunction");

const schema = "public";

exports.getVerificaLogin = async (usuario, password) => {
  try {
    return await pgFunction(schema, "ft_ma_verifica_login", [
      usuario,
      password,
    ]);
  } catch (error) {
    console.error("getVerificaLogin", error);
    throw new Error(error);
  }
};

