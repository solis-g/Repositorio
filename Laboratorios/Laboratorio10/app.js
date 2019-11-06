const express = require('express')
const config = require ('./bin/config')
const cors = require('cors')
const indexRouter = require('./routes/register')

var app=express()

//buscara la variable port o en otro caso el puerto 
app.listen(process.env.PORT || '3000', () => {  
    console.log('Servidor web funcionando');
}) 

config.connect();
//app.use(logger("dev"));
app.use(cors());