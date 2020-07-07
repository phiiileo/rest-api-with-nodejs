const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
    const message = JSON.stringify({
        message: "Welcome to phileo nodejs api"
    })
    console.log("general route handler", req.baseUrl + req.path)
    res.end(message)
})

module.exports = router