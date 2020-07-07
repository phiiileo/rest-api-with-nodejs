module.exports = (req, res) => {
    console.log("login route hit");
    res.send(JSON.stringify({message:"Login Route"}))
}