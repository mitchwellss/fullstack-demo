const express = require('express')
const app = express()

const server = require('vite-express')
const db = require ('./db/client')
db.connect()


app.use('/api', require('./api'))




server.listen(app, 8080, ()=>{
    console.log('starting server on port 8080')
})