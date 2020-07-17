const fs = require('fs');
const http = require('http');


const server = http.createServer((req, res) => {
    const path = req.url;
    let filename = path
    let extention = null;
    if (path.includes("css")) {
        extention = "css"
    }
    if (path === '/') {
        filename = '/index.html'
    }

    fs.readFile(`public${filename}`, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.end("SOmething broke")
        }
        if (data) {
            res.writeHead(200, {
                "Content-Type": `text/${(extention) ? extention : "html"}`
            })
            res.end(data)
        }
    })
})











const PORT = 5003
server.listen(PORT, () => {
    console.log("Server is up and running at http://localhost:" + PORT)
})