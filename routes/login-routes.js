const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Te encontras en el login');
});
 

router.get('/verificar-login/', (req, res) => {
  res.send("Login correcto o incorrecto");
});

module.exports = router;
