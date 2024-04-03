const { Router } = require('express')
const {auth} = require('../Middlewares/authMiddleware')
const {
    verEstudiante, 
    crearEstudiante, 
    actualizarEstudiante, 
    borrarEstudiante
} = require('../controllers/estudiantesController')

const { verUsuarios, crearUsuario, login } = require('../controllers/usuariosController')

const router = Router()

// Mostrar el listado de estudiantes
router.get('/estudiantes', auth, verEstudiante)
// Crear nuevo estudiante
router.post('/estudiantes/crear', auth, crearEstudiante )
// Actualizar estudiante
router.put('/estudiantes/actualizar/:id', auth, actualizarEstudiante )
// Borrar estudiante
router.delete('/estudiantes/borrar/:id', auth, borrarEstudiante)


router.get('/usuarios', auth, verUsuarios)
router.post('/usuarios/crear', auth, crearUsuario)
router.post('/usuarios/login', login)

module.exports = router