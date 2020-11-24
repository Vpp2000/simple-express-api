const express = require("express");
const app = express();

const obtener_cursos = require('./routes');
app.use('/', obtener_cursos);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});