require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

//mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
mongoose.connect(process.env.DATABASE_URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('error', (error) =>console.log("CONECTADO"))



app.use(express.json())
const focosRouter  = require('./routes/focos')
app.use('/focos', focosRouter)

app.listen (port, ()=> console.log(`SERVIDOR INICIALIZADO ${port}`))