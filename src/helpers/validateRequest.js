const loggers = require('./logger')
const { VALIDATION_ERROR } = require('../contants/ErrorConstant')

const validaRequest = (req, schema, payload = 'body') => {
    const result = schema.validate(req[payload])
    console.log('result', result)
    loggers.info('validaRequest', result)
    if (result.error) {
        throw VALIDATION_ERROR
    }
}

module.exports = {
    validaRequest,
}
