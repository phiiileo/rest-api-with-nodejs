const auth = require('./authIndex')
const hashPassword = (password) => auth.hashPassword(password)
const checkPassword = (password, hash) => auth.comparePassword(password, hash)
const fs = require('fs');


let db;
fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
        console.log(new Error(err).message);
        fs.writeFile('db.json', `[]`, 'utf8', (err_, data_) => {
            return
        })
    } else {
        db = JSON.parse(data)
    }
})
module.exports = (req, res) => {
    console.log("Register endpoint hit");
    const {
        body
    } = req;
    console.log(body)

    hashPassword(body.password)
        .then(hashData => {
            db.push({
                username: body.username,
                password: hashData,
                userId: Math.floor(Math.random() * 100 + 1)
            });
            fs.writeFile('db.json', JSON.stringify(db), (_err, _data) => {
                if (_err) {
                    return
                } else {

                }
            })
            res.end(JSON.stringify({
                status: true,
                statusCode: 200,
                message: 'Registration was successful!',
                token:"23456789hvcdghnjhvcd456yuikjhgfcvbhjuytredfghjkmnbvc"
            }))
        })
        .catch(err => {
            console.log(err)
            res.end(JSON.stringify({
                status: false,
                statusCode: 401,
                message: 'Registration was not successful!',
                token: null
            }))
        })
}