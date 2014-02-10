define(['jquery',
		'underscore',
		'backbone',
		'socketio',
		'collections/ClientCollection',
		'text!templates/HomeTemplate.html'
	], function ($, _, Backbone, io, ClientCollection, HomeTemplate) {

	var HomeView = Backbone.View.extend({

			el : '#container',
			socket : io.connect('http://192.168.1.64'),

			initialize : function (options) {

				var _self = this;

				_self.$el.html(_.template(HomeTemplate));

				_self.StartConection();

				_self.socket.emit('loggin', {
					id : 0,
					name : 'server',
					timestamp : new Date().getTime()
				});

				_self.socket.on('newClient', function(data){
					$('#ClientsList').find('ul').append('<li>'+data.ip+'</li>');
				});

				
			},
			events : {
				'click #start' : 'StartConection'

			},
			StartConection : function () {
				var _self = this;

				/*_self.socket.on('news', function (data) {

				console.log(data);

				});*/

			},
			render : function () {},
		});

	return HomeView;

});
