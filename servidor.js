/* global process */
/* global __dirname */
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');

var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var Grid = require('gridfs-stream');
var fs = require('fs');
var server = http.createServer(app)
var configDB = require('./dbconfig.js');
var mongoose = require('mongoose');

var session = require('express-session')
var passport = require('passport');
require('./passport')(passport);

mongoose.connect(configDB.url);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'master')));
app.set('/views', express.static(__dirname + '/public'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/interface',  express.static(__dirname + '/interface'));
app.use('/uploads', express.static(__dirname + "/uploads"));

app.engine('html', require('ejs').renderFile);
app.use(session({
    secret: configDB.secret,
    name: configDB.name,
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (request, response) {
    response.render('index.html');
});


require('./api/conta/user-routes.js')(app, server, passport);
require('./api/util-routes.js')(app, server, passport);

/* Quests */
require('./api/quests/quests-routes.js')(app, server, passport);
require('./api/quests/perguntas-routes.js')(app, server, passport);
require('./api/quests/respostas-routes.js')(app, server, passport);
require('./api/quests/rewards-routes.js')(app, server, passport);

require('./api/world/itens-routes.js')(app, server, passport);
require('./api/world/npcs-routes.js')(app, server, passport);
require('./api/world/mob-routes.js')(app, server, passport);

function auth(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/')
}

server.listen(server_port, server_ip_address);
console.log('rodando na porta: ' + server_port);