const Estudiante = require('../models/EstudianteModel')

const verEstudiante = async (req, res) => {
    return res.json(await Estudiante.find())
}

const crearEstudiante = (req, res) => {
    const estudiante = req.body
    const nuevoEstudiante = new Estudiante(estudiante)
    nuevoEstudiante.save().then(() => {
        return res.send('estudiante creado!!')
    }).catch(error => {
        return res.status(500).send(error)
    })
}

const actualizarEstudiante = (req, res) => {
    const {id} = req.params
    const estudiante = req.body
    Estudiante.findByIdAndUpdate(id, estudiante).then(()=>{
        return res.send('Estudiante actualizado')
    }).catch(error => {
        return res.status(500).send(error)
    })
}

const borrarEstudiante = async (req, res) => {
    await Estudiante.findByIdAndDelete(req.params.id)
    return res.send('Estudiante eliminado')
}


module.exports = {
    verEstudiante,
    crearEstudiante,
    actualizarEstudiante,
    borrarEstudiante
}
