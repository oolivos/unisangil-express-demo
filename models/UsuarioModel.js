const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario', {
    nombre: String,
    email: String,
    password: String
})

module.exports = Usuario