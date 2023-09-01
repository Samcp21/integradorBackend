const { roles, collaborators } = require('../../database/models')
const { hashPassword, compareSync } = require('../../helpers/bcrypt')
const { generateAccessToken, verifyToken } = require('../../helpers/jwt')

const getRoles = async (req, res) => {
    try {
        console.log("GET Roles")
        // const token = req.headers.authorization.split(" ")[1]
        // console.log("token", token)
        // const result = verifyToken(token)
        // console.log("result", result)
        const getRoles = await roles.findAll()
        res.send(getRoles)
    } catch (error) {
        console.log("error", error)
    }
}
const postCollaborators = async (req, res) => {
    try {
        let response
        console.log("req.body", req.body)
        const { numeroDocumento, password } = req.body
        const findCollaborators = await collaborators.findOne(
            {
                where: {
                    numeroDocumento,
                    activo: 1
                }
            }
        )
        if (findCollaborators) {
            response = {
                data: findCollaborators,
                message: "El Colaborador ya existe",
                status: "02"
            }
        }
        else {
            const passwordHash = await hashPassword(password)
            const data = await collaborators.create({
                ...req.body,
                password: passwordHash
            })
            response = {
                data,
                message: "El Colaborador fue Creado", status: "01"
            }
        }
        res.send(response)
    } catch (error) {
        console.log("error", error)
    }
}
const getCollaborators = async (req, res) => {
    try {
        const data = await collaborators.findAll(
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
const putCollaborators = async (req, res) => {
    try {
        console.log("req.body", req.body)
        const data = await collaborators.update(
            { ...req.body }, {
            where: {
                id: req.body.id
            }
        })

        res.send(data)

    } catch (error) {
        console.log("error", error)
    }
}
const loginCollaborators = async (req, res) => {
    try {
        console.log("req.body", req.body)
        const { usuario, password } = req.body
        const data = await collaborators.findOne(
            {
                where: {
                    numeroDocumento: usuario,
                    activo: 1
                }
            }
        )
        console.log("data", data)
        if (data) {
            const campareHash = await compareSync(password, data.password)
            console.log("compareHash", campareHash)
            delete data.password
            res.send({ status: 200, token: await generateAccessToken(data), data })
        }
        else {
            res.status(401).send({ status: false, message: "Unauthorized" })
        }
    } catch (error) {
        console.log("error", error)
    }
}
module.exports = {
    getRoles,
    postCollaborators,
    getCollaborators,
    putCollaborators,
    loginCollaborators
}