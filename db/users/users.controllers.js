const getInfoUsuarioController = require("./controllers/getInfoUsuario");
const postCrearUsuarioController = require("./controllers/postCrearUsuario");
const patchModificaUsuarioController = require("./controllers/patchModificaUsuario");

exports.getInfoUsuarioController = getInfoUsuarioController.getInfoUsuario;
exports.postCrearUsuarioController =
  postCrearUsuarioController.postCrearUsuario;
exports.patchModificaUsuarioController =
  patchModificaUsuarioController.patchModificaUsuario;
