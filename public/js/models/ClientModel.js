define([
		'jquery',
		'underscore',
		'backbone'
	], function ($, _, Backbone) {

	var ClientModel = Backbone.Model.extend({

			defaults : {
				id: '0'
			},

			initialize : function () {
			
			},

			startconnection : function () {
			

			}

		});

	return ClientModel;
});
