const jwt = require('jsonwebtoken')

const generateAccessToken = (v, expire) => jwt.sign(v, process.env.JWT_SECRET, { expiresIn: expire || process.env.JWT_EXPIRE, algorithm: 'HS256' })

const verifyToken = (v) => {
    try {
        return jwt.verify(v, process.env.JWT_SECRET)
    } catch (error) {
        return false
    }
}
module.exports = {
    generateAccessToken,
    verifyToken,
}
