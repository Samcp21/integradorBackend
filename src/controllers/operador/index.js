const { operador } = require('../../database/models')
const { Op } = require('sequelize')

const crearOperador = async (req, res) => {
    try {
        console.log('req.body', req.body)
        const data = await operador.create({
            ...req.body,
            nombreCompletos: req.body.nombreCompletos.toUpperCase(),
        })
        res.send(data)
    } catch (e) {
        loggers.error(JSON.stringify(e))
        const code = e.code ? e.code : 500
        const message = e.message ? e.message : SERVER_ERROR.message
        res.status(code).json({ codigoRespuesta: 99, message })
    }
}
const traerOperador = async (req, res) => {
    try {
        console.log('req.query', req.query)
        const { fromDateLeft, fromDateRight, numeroDocumento } = req.query
        const condition = ['and', 'or']
        const data = await operador.findAll(
            {
                raw: true,
                where: {
                    // [numeroDocumento ? Op.or : Op.and]: {
                    //     numeroDocumento: {
                    //         [Op.like]: `%${numeroDocumento}%`,
                    //     },
                    //     // created_at: {
                    //     //     [Op.between]: [fromDateLeft, fromDateRight],
                    //     // },
                    // },
                },
            }
        )
        console.log('data_traerOperador', data)
        res.send(data)
    } catch (e) {
        console.log(e)
        const code = e.code ? e.code : 500
        const message = e.message ? e.message : SERVER_ERROR.message
        res.status(code).json({ codigoRespuesta: 99, message })
    }
}
const updateOperador = async (req, res) => {
    try {
        console.log('UPDATE_req', req.body)
        const { id } = req.body
        const data = await operador.update(
            {
                ...req.body,
            },
            {
                where: {
                    id,
                },
            }
        )
        console.log('data', data)
        res.send(data)
    } catch (e) {
        console.log(e)
        const code = e.code ? e.code : 500
        const message = e.message ? e.message : SERVER_ERROR.message
        res.status(code).json({ codigoRespuesta: 99, message })
    }
}

module.exports = {
    traerOperador,
    crearOperador,
    updateOperador,
}
