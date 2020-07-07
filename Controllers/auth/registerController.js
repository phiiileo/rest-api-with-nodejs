module.exports = (req, res) => {
    console.log("Register endpoint hit");

    res.end(JSON.stringify({
        message: "Register Router"
    }))
}