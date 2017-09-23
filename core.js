var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');



var app = express();

app.use(favicon(path.join(__dirname, 'public', 'fav.ico')))
// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
//app.set('view engine', 'jade');
//
//app.engine('html', require('./routes/htmlEngine'));
//app.set('view engine', 'html');

//app.engine('html', ejs);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3100);
console.log("x Ayuda Contactame esta activo");