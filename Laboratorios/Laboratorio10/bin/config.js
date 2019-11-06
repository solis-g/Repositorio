const Mongoose = require("mongoose");
let database = "RegisterDB"
let host = 'localhost'
let port= '27017'
let uri = `mongodb://${host}:${port}/${database}`;

const connect =()=>{
    Mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        console.log('conexion a la base ${database} exitosa');
    })
    .catch(()=>{
        console.log('ha ocurrido un error al conectar');
    });
    module.exports={
        connect
    }
}