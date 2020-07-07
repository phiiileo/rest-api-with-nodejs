const jwt = require('jsonwebtoken');
const fs = require('fs');
const authIndex = require('./authIndex');


let db = []

module.exports = (req, res) => {
    const {
        body
    } = req;

    console.log("login route hit");
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.log("Something went wrong!");
        } else {
            db = [...JSON.parse(data)];

            const isUser = db.filter(user => {
                console.log(user)
                return user.username === body.username
            })[0];
            console.log(isUser);
            console.log(body.password, isUser.password)
            authIndex.comparePassword(body.password, isUser.password)
                .then(data => {
                    console.log(data);
                    getToken(isUser)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })
    const getToken = (payload) => {
        jwt.sign(payload, 'secret', (err, token) => {
            if (err) res.send('Something went wrong!')
            delete payload.password
            res.send(JSON.stringify({
                message: "Login Successful!",
                token,
                user: payload
            }))
        })
    }

}