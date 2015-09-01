var express = require('express');
var router = express.Router();
var alumnoFactory = require('./../models/alumno.js');
var dbname = 'mongodb://localhost/alumnos';
var mongoose = require('mongoose'); 
mongoose.connect(dbname);        
var db = mongoose.connection;

db.once('open', function (callback) {
    console.log("la base de datos mongoose está trabajando");
});

router.get('/', function(req, res, next) {
    var Alumno = mongoose.model('Alumno');
    
    Alumno.find(function (err, alumnos) {
        if (err) return next(err);
        res.json(alumnos);
    }); 
});
router.get('/sesiones/:id', function(req, res, next) {
    var Alumno = mongoose.model('Alumno');
    
    Alumno.findById(req.params.id, function (err, alumno) {
        if (err) return next(err);
        res.json(alumno);
    });
});

router.post('/', function(req, res, next) {
    
    var alumno = alumnoFactory({ 
        name: req.body.name, 
        age: parseInt(req.body.age, 10) 
    });    
    
    alumno.save(function (err, data) {
        if (err) return next(err);
        res.json({ success: true });
    });            
});
router.post('/:id', function(req, res, next) {//guarda sesion
    
    var Alumno = mongoose.model('Alumno');
    
    Alumno.findById(req.params.id, function (err, alumno) {
        if (err) return next(err);
        alumno.sesiones.push({
            fecha: req.body.fecha,
            noSesion: req.body.noSesion,
            sintomas: req.body.sintomas,
            resumenSesion: req.body.resumenSesion,
            proximaSesion: req.body.proximaSesion,
            tarea: req.body.tarea
        });
        alumno.save(function (err) {
            if (!err) 
                res.json(alumno);
        });
        
    });       
});

router.get('/:id', function(req, res, next) {
    var Alumno = mongoose.model('Alumno');
    
    Alumno.findById(req.params.id, function (err, alumno) {
        if (err) return next(err);
        res.json(alumno);
    });
});

router.put('/', function(req, res, next) {
    var Alumno = mongoose.model('Alumno');
    
    Alumno.findById(req.body.id, function (err, alumno) {
        if (err) return next(err);

        alumno.name = req.body.name;
        alumno.age = parseInt(req.body.age, 10);  
        
        alumno.save(function (err, data) {
            if (err) return next(err);
            res.json({success: true});
        }); 
    });   
});

router.delete('/:id', function(req, res, next) {
    var Alumno = mongoose.model('Alumno');
    
    Alumno.remove({ _id: req.params.id }, function (err) {
        if (err) return next(err);
        
        res.json({ success: true });
    });
});


module.exports = router;