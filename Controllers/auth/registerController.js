const auth = require('./authIndex')
const hashPassword = (password) => auth.hashPassword(password)
const checkPassword = (password, hash) => auth.comparePassword(password, hash)


module.exports = (req, res) => {
    console.log("Register endpoint hit");
    const {
        body
    } = req;
    console.log(body)


    hashPassword(body.password)
        .then(data => {
            res.end(JSON.stringify({
                status: true,
                statusCode: 200,
                message: 'Registration was successful!',
                token: data,
                userId: Math.floor(Math.random() * 100 + 1)
            }))
        })
        .catch(err => {
            res.end(JSON.stringify({
                status: false,
                statusCode: 401,
                message: 'Registration was not successful!',
                token: null
            }))
        })
}