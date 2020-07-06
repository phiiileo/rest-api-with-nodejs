const express = require('express');
const app = express();




app.get('/', (req, res) => {
    const message = JSON.stringify({
        message: "Welcome to phileo node api"
    })
    res.end(message)
})

// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log(`Server is up and running at http://localhost:${PORT}`)
})