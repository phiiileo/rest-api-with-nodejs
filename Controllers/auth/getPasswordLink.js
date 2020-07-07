module.exports = (req, res) => {
    console.log("Get password link endpoint hit");

    res.end(JSON.stringify({
        message: "Get password link Router"
    }))
}