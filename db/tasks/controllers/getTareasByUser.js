const { validationResult } = require("express-validator");
const tareasProvider = require("../tasks.providers");

exports.getTareasByUser = async (req, res) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { idAutor } = req.query;

  try {
    const listaTareas = await tareasProvider.getTareasByUser(idAutor);
    res.status(200).json({ ok: true, listaTareas });
  } catch (error) {
    console.error("getTareasByUser", error);
    res.status(500).json({
      ok: false,
      mensaje: "Error al obtener las tareas del usuario",
      errors: error.message,
    });
  }
};
