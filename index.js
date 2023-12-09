const express = require('express')
const connectToMongodb = require('./config/mongoDb')

const app = express()
app.use(express.json())
const PORT = 7000 // hard global 

connectToMongodb()

// default route
app.get('/', (req, res) => {
    res.send('Hello from node js!')
})

// available routes
app.use('/', require('./routes'));


app.listen(PORT, () => {
    console.log(`Example app listening on PORT http://localhost:${PORT}`)
})