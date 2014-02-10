/*****
 * 	Farfardevice Test 0.01b
 *
 *   Backbone + node.js
 */
require.config({
	paths : {
		jquery : 'libs/jquery-1.9.0/jquery.min',
		underscore : 'libs/underscore.js-1.3.1-amdjs/underscore-min',
		backbone : 'libs/backbone.js-0.9.9-amdjs/backbone-min',
		text : 'libs/require-text-2.0.3/text',
		socketio : '../socket.io/socket.io',
	},
	shim : {
		backbone : {
			deps : ["underscore", "jquery"],
			exports : "Backbone"
		},
		underscore : {
			exports : "_"
		},
		socketio : {
			exports : 'io'
		}
	}
});

require([
		// Load our app module and pass it to our definition function
		'app'
	], function (App) {
	// The app dependency is passed in as "App
	App.initialize();
});
