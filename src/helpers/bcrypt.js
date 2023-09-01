const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
    const saltRounds = parseInt(process.env.BCRYPT_ROUNDS, 10)
    return await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) reject(err)
            resolve(hash)
        })
    })
}

const compareSync = (req, bd) => bcrypt.compareSync(req, bd)

module.exports = {
    hashPassword,
    compareSync,
}
