const express = require('express');
const app = express();
const cors = require("cors");

const taskRouter = require('./routes/tasks-routes.js');
const loginRouter = require('./routes/login-routes.js');

const corsOptions = {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
  maxAge: 3600
}



app.use(cors(corsOptions));
app.use('/api/login', cors(corsOptions), loginRouter);
app.use('/api/tareas', cors(corsOptions), taskRouter);

app.listen(3000, () => {
  console.log('Servidor funcionando en el puerto 3000');
});
app.get('/', (_req, res) => {
  mensajeBienvenida = {
    saludo: 'Bienvenido a la REST API del Proyecto Mini Office',
    creator: 'Creado por: Alicia Flores',
    fecha: '08/09/2022',
    version: 'Versión 1.0.0',
    github: ''
  }
  // res.send("Bienvenido a la REST API del Proyecto Mini Office");
  res.json(mensajeBienvenida);
});

module.exports = app;