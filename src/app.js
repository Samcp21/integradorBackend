const express = require('express')
const morgan = require('morgan')

const helmet = require('helmet')

require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` })
const cors = require('cors')

const app = express()
const { sequelize } = require('./database/models/index')

// MIDLEWARE
app.use(cors('*'))

app.use(helmet())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/ms/genbby/servicios/', require('./routes'))

// Iniciando Servidor.

app.listen(process.env.NODE_PORT, process.env.NODE_HOST, async () => {
    try {
        console.log(`succes ${process.env.NODE_HOST}:${process.env.NODE_PORT} - ${process.env.NODE_ENV}`)
        await sequelize.authenticate()
        // await sequelize.sync({ force: true }) //
    } catch (error) {
        console.error('err ', error)
    }
})
