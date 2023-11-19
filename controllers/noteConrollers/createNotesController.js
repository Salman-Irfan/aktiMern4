const express = require('express')
const createNotesController = (req, res) => {
    res.json({
        msg: 'controller called'
    })
}
module.exports = createNotesController