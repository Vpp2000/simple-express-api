const express = require('express')
const router = express.Router()
const cursos = require("./cursos");


// definiendo las rutas de la API
router.get('/', (req, res) => res.send({"Hola profesor Tenorio" : "Curso de computacion cloud"}));
router.get('/curso/:id', (req, res) => {
    const id_curso = req.params.id;
    const curso = cursos.filter( curso => curso.codigo === id_curso );
    res.send(curso);
});


module.exports = router;