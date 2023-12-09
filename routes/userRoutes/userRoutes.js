const express = require('express');
const userRegisterController = require('../../controllers/userControllers/userRegisterController');
const userLoginController = require('../../controllers/userControllers/userLoginController');
const router = express.Router();

// create note route
router.post("/auth/register", userRegisterController );
router.post("/auth/login", userLoginController );

module.exports = router;