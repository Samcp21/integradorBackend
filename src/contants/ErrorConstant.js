const USUARIO_NOT_FOUND = { code: 401, message: 'Usuario/Password incorrecto' }
const SERVER_ERROR = { code: 500, message: 'Ha ocurrido un error interno' }
const VALIDATION_ERROR = { code: 403, message: 'Ha ocurrido un error de validacion' }

module.exports = {
    USUARIO_NOT_FOUND,
    SERVER_ERROR,
    VALIDATION_ERROR,
}
