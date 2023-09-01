const { verifyToken } = require('../helpers/jwt')

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    const result = verifyToken(token)
    if (result) {
        req.user = {
            id: result.id,
        }
        next()
    } else {
        res.status(401).json({ codigoRespuesta: '97', message: 'Acceso no authorizado' })
    }
}
