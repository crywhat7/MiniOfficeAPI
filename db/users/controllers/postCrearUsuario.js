const { validationResult } = require("express-validator");
const usersProvider = require("../../users/users.providers");

exports.postCrearUsuario = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { user, password, correo } = req.body;

  try {
    const crearUsuario = await usersProvider.postCrearUsuario(
      user,
      password,
      correo
    );
    res.status(200).json({ ok: true, crearUsuario });
  } catch (error) {
    console.error("postCrearUsuario", error);
    res.status(500).json({
      ok: false,
      mensaje: "Error al crear el usuario",
      errors: error.message,
    });
  }
};
