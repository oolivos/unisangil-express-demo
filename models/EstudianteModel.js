const mongoose = require('mongoose')

const Estudiante = mongoose.model('Estudiante', {
    nombre: String,
    apellido: String,
    email: String
})

module.exports = Estudiante