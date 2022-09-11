const { validationResult } = require("express-validator");
const usersProviders = require("../../users/users.providers");

exports.patchModificaUsuario = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { idUsuario } = req.query;
  const { user, password, correo } = req.body;

  try {
    const modificarUsuario = await usersProviders.patchModificaUsuario(
      idUsuario,
      user,
      password,
      correo
    );
    res.status(200).json({ ok: true, modificarUsuario });
  } catch (error) {
    console.error("patchModificaUsuario", error);
    res.status(500).json({
      ok: false,
      mensaje: "Error al modificar el usuario",
      errors: error.message,
    });
  }
};
