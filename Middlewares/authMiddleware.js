const jwt = require('jsonwebtoken')
const auth = (req, res, next) => {
    const headers = req.headers && req.headers.authorization
    if (!headers) return res.status(403).send('No autorizado - Sin autorizacion')
    const token = headers.split(' ')[1]
    if (!token) return res.status(403).send('No autorizado - Sin token')
    
    try {
        const payload = jwt.verify(token, process.env.PRIVATE_KEY)
        req.user = payload
    } catch(ee) {
        return res.status(403).send(ee)
    }

    next()

}

module.exports = {
    auth
}