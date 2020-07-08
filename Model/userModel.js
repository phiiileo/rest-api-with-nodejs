const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    role: Number
})

const User = mongoose.model('user', userSchema);

const createNewUser = () => new Promise((resolve, reject) => {
    User.create({
            first_name: "Phileo",
            last_name: "Phileo",
            email: "phileo@phileo.com",
            role: 1
        })
        .then((err, data) => {
            if (err) {
                console.log(new Error(err).message)
                reject(new Error(err).message)
            } else {
                resolve(data)
            }
        })
})

const getAllUsers = () => {
    User.find()
}

module.exports = {
    createNewUser,
    getAllUsers
}