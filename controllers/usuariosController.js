const Usuario = require('../models/UsuarioModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const verUsuarios = async (req, res) => {
    return res.json(await Usuario.find())
}

const crearUsuario = (req, res) => {
    let usuario = req.body
    const salt = bcrypt.genSaltSync(10)
    usuario.password = bcrypt.hashSync(usuario.password, salt)

    const newUsuario = new Usuario(usuario)
    newUsuario.save().then(() => {
        return res.send('Usuario creado correctamente')
    }).catch(error => {
        return res.status(500).send(error)
    })

}

const login = async (req, res) => {
    const { email, password } = req.body
    const usuario = await Usuario.findOne({ email: email }).exec()
    if (!usuario) return res.status(403).send('Usuario no existe')
    if (!bcrypt.compareSync(password, usuario.password)) return res.status(403).send('Datos incorrectos')
    const token = jwt.sign({
        nombre: usuario.nombre,
        email: usuario.email,
        id: usuario._id
    }, process.env.PRIVATE_KEY)
    return res.json({
        type: 'Bearer',
        token: token
    })
}

module.exports = {
    verUsuarios,
    crearUsuario,
    login
}

