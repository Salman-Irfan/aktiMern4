const express = require('express')
const router = express.Router()

// Import routes modules here
const notesRoutes = require("./noteRoutes/noteRoutes")

// Define base routes for your modules
router.use('/api/v1/', notesRoutes);


module.exports = router;