const express = require('express')
const router = express.Router()

// Import routes modules here
const notesRoutes = require("./noteRoutes/noteRoutes")
const userRoutes = require("./userRoutes/userRoutes")

// Define base routes for your modules
router.use('/api/v1/', notesRoutes);
router.use('/api/v1/', userRoutes);


module.exports = router;