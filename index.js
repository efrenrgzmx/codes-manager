/**
 * Inclusiones
 * **/

//COMUNICACION WEBSOCKET
var express = require('express');
var app = express();
const http = require('http').Server(app);

app.use(express.static('public'));


http.listen(4200);



