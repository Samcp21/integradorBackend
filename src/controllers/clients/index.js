const { persons } = require('../../database/models')

const postPersons = async (req, res) => {
    try {
        let response
        console.log("req.body", req.body)
        const { numeroDocumento } = req.body
        const findPersons = await persons.findOne(
            {
                where: {
                    numeroDocumento,
                    activo: 1
                }
            }
        )
        if (findPersons) {
            response = {
                data: findPersons,
                message: "El Numero de documento ya existe",
                status: "02"
            }
        }
        else {
            const data = await persons.create({
                ...req.body,
            })
            response = {
                data,
                message: "El Cliente fue creado con exito", status: "01"
            }
        }

        res.send(response)
    } catch (error) {
        console.log("error", error)
    }
}
const getPersons = async (req, res) => {
    try {
        const data = await persons.findAll(
            {
                where: {
                    activo: 1
                }
            }
        )
        res.send(data)
    } catch (error) {
        console.log("error", error)
    }
}
const putPersons = async (req, res) => {
    try {
        console.log("req.body", req.body)
        const fullName= req.body.nombres + " "+req.body.apellidos
        const data = await persons.update(
            { ...req.body,
              nombreCompletos:fullName }, {
            where: {
                id: req.body.id
            }
        }
        )
        res.send(data)

    } catch (error) {
        console.log("error", error)
    }
}

module.exports = {
    postPersons,
    getPersons,
    putPersons,
}
