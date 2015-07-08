var express = require('express');
var router = express.Router();
var sesiones = require('../models/sesion.js');
var dbname = 'mongodb://localhost/sesiones';
var mongoose = require('mongoose'); 
            
var db = mongoose.createConnection(dbname);

db.once('open', function (callback) {
    console.log("base de datos referente a sesiones trabajando");
});

router.get('/', function(req, res, next) {
    var Sesion = mongoose.model('Sesion');
    
    Sesion.find(function (err, sesiones) {
        if (err) 
            return next(err);
        res.json(sesiones);
    }); 
});

router.post('/', function(req, res, next) {
    
    var sesion = sesiones({
        fecha: req.body.fecha,
        noSesion: parseInt(req.body.noSesion, 10),
        sintomas: req.body.sintomas,
        resumenSesion: req.body.resumenSesion,
        proximaSesion: req.body.proximaSesion,
        tarea: req.body.tarea
    });    
    
    sesion.save(function (err, data) {
        if (err) return next(err);
        res.json({ success: true });
    });            
});

router.get('/:id', function(req, res, next) {
    var Sesion = mongoose.model('Sesion');
    
    Sesion.findById(req.params.id, function (err, sesion) {
        if (err) return next(err);
        res.json(sesion);
    });
});

router.put('/', function(req, res, next) {
    var Sesion = mongoose.model('Sesion');
    
    Sesion.findById(req.body.id, function (err, sesion) {
        if (err) return next(err);

        sesion.fecha = req.body.fecha;
        sesion.noSesion = parseInt(req.body.noSesion, 10);
        sesion.sintomas = req.body.sintomas;
        sesion.resumenSesion = req.body.resumenSesion;
        sesion.proximaSesion = req.body.proximaSesion;
        sesion.tarea = req.body.tarea;  
        
        sesion.save(function (err, data) {
            if (err) return next(err);
            res.json({success: true});
        }); 
    });   
});

router.delete('/:id', function(req, res, next) {
    var Sesion = mongoose.model('Sesion');
    Sesion.remove({ _id: req.params.id }, function (err) {
        if (err) return next(err);
        res.json({ success: true });
    });
});
module.exports = router;