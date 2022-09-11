const { validationResult } = require("express-validator");
const usersProvider = require("../../users/users.providers");

exports.getInfoUsuario = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { idUsuario } = req.params;

  try {
    const infoUsuario = await usersProvider.getInfoUsuario(idUsuario);
    if (infoUsuario) {
      res.status(200).json({ ok: true, infoUsuario });
    } else {
      res.status(200).json({ ok: true, infoUsuario: {} });
    }
  } catch (error) {
    console.error("getInfoUsuario", error);
    res.status(500).json({
      ok: false,
      mensaje: "Error al obtener la informacion del usuario",
      errors: error.message,
    });
  }
};
