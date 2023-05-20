//Inicializacion de modulos
var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var rutas = require('./backend/rutas');

//configuracion 
mongoose.connect('mongodb://localhost/lab09');
app.use(express.static(__dirname+'/angular'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//Carga de rutas
rutas.iniciar(__dirname);
rutas.principal(app);

//Inicia el servidor
app.listen(3000);
console.log("Escuchando en el puerto 3000 ---");