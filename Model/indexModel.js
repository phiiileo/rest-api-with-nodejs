const mongoose = require('mongoose');

const createConnection = () => {
    const mongodbUrl = 'mongodb://localhost:27017/api';
    mongoose.connect(mongodbUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (err) => {
        if (err) {
            console.log(new Error(err).message);
            return
        }
        console.log("Mongo Db connected successfully!")
    })
}

module.exports = {
    createConnection
}