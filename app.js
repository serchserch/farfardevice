
/**
 * Module dependencies.
 */

var express = require('express'),
routes = require('./routes'),
http = require('http'),
path = require('path'),
_ = require('underscore');

//db
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/farfardevice');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
//app.get('/find',);

var server = http.createServer(app);
var io = require('socket.io').listen(server, { log: false });

var Client = mongoose.model('Client', {
		id : String,
		name : String,
		timestamp : String,
		ip : String
	});

var ClientsArray = []

io.sockets.on('connection', function (socket) {

	console.log(io.clients);
	
	var address = socket.handshake.address;

	socket.on('loggin', function (data) {

		var ServerClient = new Client({
				id : data.id,
				name : data.name,
				timestamp : data.timestamp,
				ip : address.address
			});

			
		if (_.isUndefined(_.findWhere(ClientsArray, {
					ip : address.address
				}))) {

			ClientsArray.push(ServerClient)

			socket.emit('newClient', {
				ip : address.address
			});

			ServerClient.save(function (err) {
				if (err)
					console.log('fuckk!');
			});

		}

		//console.log(ClientsArray);

	});

});

server.listen(app.get('port'))
