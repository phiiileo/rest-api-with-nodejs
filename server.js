const fs = require('fs');
const http = require('http');


const server = http.createServer((req, res) => {
    const path = req.url;
    if (path === '/') {
        res.end('Welcome to the home page!')
    } else {
        res.statusCode = 401;
        res.writeHead(402, "Wrong page!");
        res.end("This page is under construction or simply a wrong link")
    }
})











const PORT = 5003
server.listen(PORT, () => {
    console.log("Server is up and running at http://localhost:" + PORT)
})