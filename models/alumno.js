var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var Sesiones = new Schema({    
    fecha: { type: Date, default: Date.now },
    noSesion: Number,
    sintomas: String,
    resumenSesion: String,
    proximaSesion: String,
    tarea: String,
});

var alumnoSchema = Schema({
    name: String,
    age: Number,
    referenced: {type: mongoose.Schema.Types.ObjectId, ref: 'Sesion'},//path.
    sesiones: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Sesion'} ]//"populate" the required data from a secondary collection
});

var Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = function(config) {
    return new Alumno(config);
} 
