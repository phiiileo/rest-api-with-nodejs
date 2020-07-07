const express = require('express');
const router = require('./routes');
const authRouter = require('./routes/authRouter');
const app = express();
const bodyParser = require('body-parser');
const {
    createConnection
} = require('./Model/indexModel');


// middlewares
app.use(bodyParser.json())

//Connect to MongoDB

createConnection()

//main routes
app.use('/', router);
app.use('/auth', authRouter)


// port
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, (req, res) => {
    console.log(`Server is up and running at http://localhost:${PORT}`)
})