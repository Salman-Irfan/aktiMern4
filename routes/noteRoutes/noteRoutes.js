const express = require('express');
const createNotesController = require('../../controllers/noteConrollers/createNotesController');
const router = express.Router();

// create note route
router.post("/notes", createNotesController );

module.exports = router;