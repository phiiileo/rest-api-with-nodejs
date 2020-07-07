module.exports = (req, res, next) => {
    console.log("Base controller handler hit", req.path);
    res.send(200);
    next()
}