const { validationResult } = require("express-validator");
const loginProvider = require("../login.provider");

exports.getVerificaLogin = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { user, password } = req.query;

  try {
    const verificaLogin = await loginProvider.getVerificaLogin(user, password);
    res.status(200).json({ ok: true, verificaLogin });
  } catch (error) {
    console.error("getVerificaLogin", error);
    res.status(500).json({
      ok: false,
      mensaje: "Error al obtener las tareas del usuario",
      errors: error.message,
    });
  }
};
