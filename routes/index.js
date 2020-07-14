const express = require('express');
const fs = require('fs');
const router = express.Router();


router.get('/', (req, res) => {
    const message = JSON.stringify({
        message: "Welcome to phileo nodejs api"
    })
    console.log("general route handler", req.baseUrl + req.path);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(data)
})

module.exports = router