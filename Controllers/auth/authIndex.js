const bcrypt = require('bcrypt');
const saltRounds = 8;

const hashPassword = (password) => new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            reject({
                message: new Error(err).message,
                status: true
            })
        }
        if (hash) {
            resolve(hash)
        }
    });
})

const comparePassword = (password, hash) => new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, result) => {
        if (err) reject(new Error(err).message)
        if (result) resolve({
            isMatch: true
        })
    })
})

module.exports = {
    hashPassword,
    comparePassword
}