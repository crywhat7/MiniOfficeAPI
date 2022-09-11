const { pgFunction } = require("../../services/pgfunction");

const schema = "public";

exports.getInfoUsuario = async (idUsuario) => {
  try {
    return await pgFunction(schema, "ft_ma_devuelve_info_usuario_segun_id", [
      idUsuario,
    ]);
  } catch (error) {
    console.error("getInfoUsuario", error);
    throw new Error(error);
  }
};

exports.patchModificaUsuario = async (idUsuario, usuario, password, correo) => {
  try {
    return await pgFunction(schema, "ft_ma_modifica_usuario", [
      idUsuario,
      usuario,
      password,
      correo,
    ]);
  } catch (error) {
    console.error("patchModificaUsuario", error);
    throw new Error(error);
  }
};

exports.postCrearUsuario = async (usuario, password, correo) => {
  try {
    return await pgFunction(schema, "ft_ma_crea_usuario", [
      usuario,
      password,
      correo,
    ]);
  } catch (error) {
    console.error("postCrearUsuario", error);
    throw new Error(error);
  }
};
