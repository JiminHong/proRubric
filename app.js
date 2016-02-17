var express = require('express'),
 app = express(),
 exphbs  = require('express-handlebars'),
 bodyParser = require('body-parser'),
 mongojs = require('mongojs'),
 https = require('https'),
 http = require('http');

var db = require('./config/database'); // get our db file

app.use('/api', require('./app/modules/form/api.js'))


//view engine ==========================================
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/config'));

//config port for node server ==========================================
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.render('landing');
})

http.createServer(app).listen(port);

console.log("Server listening on port:", port);


