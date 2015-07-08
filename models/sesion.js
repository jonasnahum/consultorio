var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;


var schema = new Schema({    
    fecha: { type: Date, default: Date.now },
    noSesion: Number,
    sintomas: String,
    resumenSesion: String,
    proximaSesion: String,
    tarea: String,
});

var Sesion = mongoose.model('Sesion', schema);

module.exports = function(config) {
    return new Sesion(config);
} 