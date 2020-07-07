module.exports = (req, res) => {
    console.log("Reset Password endpoint hit");

    res.end(JSON.stringify({
        message: "Reset Password Router"
    }))
}