const express = require("express");
const loginController = require("../Controllers/auth/loginController");
const registerController = require("../Controllers/auth/registerController");
const resetPassword = require("../Controllers/auth/resetPassword");
const getPasswordLink = require("../Controllers/auth/getPasswordLink");
const router = express.Router();


// Auth router handler
router.post('/login', loginController);
router.post('/register', registerController);
router.post('/get-password-link', getPasswordLink);
router.post('/reset-password', resetPassword);


module.exports = router