const jwt = require('jsonwebtoken')
module.exports = (req, res) => {
    console.log("login route hit");
    const payload = {
        username: "phileo",
        pass: "pass"
    }
    jwt.sign(payload, 'secret', (err, token) => {
        if (err) res.send('Something went wrong!')

        console.log(token)
        res.send(JSON.stringify({
            message: "Login Successful!",
            token
        }))
    })

}