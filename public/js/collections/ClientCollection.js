define([
    'jquery',
    'underscore',
    'backbone',
    'models/ClientModel'
], function($, _, Backbone,ClientModel) {

    var ClientCollection = Backbone.Collection.extend({
	
        model: ClientModel,
		
        url: function() {
            return 'content.json';
        },
		
        initialize: function() {
        },
		
        parse: function(response) {
            return response;
        }

    });
	
    return ClientCollection;
	
});