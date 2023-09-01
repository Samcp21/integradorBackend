const express = require('express')
const { getRoles, postCollaborators, getCollaborators, putCollaborators, loginCollaborators } = require('../../controllers/collaborators')
const authHandlerBasic = require('../../middlewares/authHandlerBasic')

const router = express.Router()

router.get('/rol', authHandlerBasic, getRoles)
router.post('/collaborators', authHandlerBasic, postCollaborators)
router.get('/collaborators', authHandlerBasic, getCollaborators)
router.put('/collaborators', authHandlerBasic, putCollaborators)
router.post('/login', loginCollaborators)
module.exports = router
