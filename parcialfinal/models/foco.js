const mongoose = require('mongoose');
//const { Schema } = mongoose;

const focoSchema = new mongoose.Schema({ //Schema
    tipo: {
        type: String, required: true
    },
    consumo: {
        type: String, required: true
    },
    eficacia: {
        type: String, required: true
    },
    marca: {
        type: String, required: true
    }
    
});

module.exports = mongoose.model('Foco', focoSchema);
