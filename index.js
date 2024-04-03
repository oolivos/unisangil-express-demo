const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const router = require('./routes/router')

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`Conectado a mongo`)
}).catch((error) => {
    console.log(error)
})

app.use('/', router)

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT} port`)
})