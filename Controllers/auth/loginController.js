const jwt = require('jsonwebtoken');
const fs = require('fs');
const authIndex = require('./authIndex');

// Place holder db - content written to db.json file
let db = []

// export handler
module.exports = (req, res) => {
    // extract request body data
    const {
        body
    } = req;

    console.log("login route hit");

    // Read existing Data from db.json
    fs.readFile('db.json', 'utf8', (err, data) => {

        // check for error
        if (err) {
            console.log("Something went wrong!");
        } else {
            // Save db content 
            db = [...JSON.parse(data)];

            // Get user from the dummy DB
            const isUser = db.filter(user => {
                console.log(user)
                return user.username === body.username
            })[0];
            console.log(isUser);

            // Check if password sent is correct
            authIndex.comparePassword(body.password, isUser.password)
                .then(data => {
                    console.log(data);
                    // Get token and send response to user
                    getToken(isUser)
                })
                // catch Error if any 
                .catch(err => {
                    console.log(err)
                    res.end(JSON.stringify({
                        error: true,
                        statusCode: 500,
                        message: "internal server error!"
                    }))
                })
        }
    })

    // Get token handler
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