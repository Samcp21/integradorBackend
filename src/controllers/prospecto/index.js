const { Sequelize, historicoReferencia } = require('../../database/models')
const { obtenerProspectos } = require('../../contants/QueryConstant')
const { QueryTypes } = require('sequelize')

const crearProspecto = async (req, res) => {
    try {
        console.log('erq.body', req.body)
        const { nroClientes, operacion, location } = req.body
        await historicoReferencia.create({ idOperador: operacion, idLocation: location, numberLead: Number(nroClientes) })
        res.send(200)
    } catch (e) {
        console.log(JSON.stringify(e))
        const code = e.code ? e.code : 500
        const message = e.message ? e.message : SERVER_ERROR.message
        res.status(code).json({ codigoRespuesta: 99, message })
    }
}
const traerProspecto = async (req, res) => {
    try {
        const { fromDateMonth, fromDateYear, tipoDocumento, location, nivel, operador } = req.body
        console.log('req.body', req.body)
        const data = await Sequelize.query(obtenerProspectos, {
            replacements: {
                fromDateMonth,
                fromDateYear,
                tipoDocumento: tipoDocumento ? (tipoDocumento == 1 ? 'PERSONAS' : 'AGENCIAS') : null,
                location,
                nivel,
                operador,
            },
            type: QueryTypes.SELECT,
            raw: true,
        })
        console.log('data',data)
        // const data = await prospectos.findAll({
        //     raw: true,
        //     where: {},
        // })
        res.send(data)
    } catch (e) {
        console.log(JSON.stringify(e))
        const code = e.code ? e.code : 500
        const message = e.message ? e.message : SERVER_ERROR.message
        res.status(code).json({ codigoRespuesta: 99, message })
    }
}

module.exports = {
    crearProspecto,
    traerProspecto,
}
