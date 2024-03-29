define([
		'jquery',
		'underscore',
		'backbone',
		'views/HomeView'
	], function ($, _, Backbone, HomeView) {

	var AppRouter = Backbone.Router.extend({
			routes : {
				'' : 'showHome'
			}
		});

	///////////////////////////////////////////
	//                                       //
	//             SET ROUTES                //
	//                                       //
	///////////////////////////////////////////


	///////////////////////////////////////////
	//                                       //
	//                ROUTES                 //
	//                                       //
	///////////////////////////////////////////
	var initialize = function () {

		LaRuta = new AppRouter;

		//
		// Home View
		//
		LaRuta.on('route:showHome', function () {
			var HomeViewToRender = new HomeView();
			HomeViewToRender.render();

		});

		//
		// Default View
		//
		LaRuta.on('route:defaultAction', function () {});

		Backbone.history.start();
	};

	///////////////////////////////////////////
	//                                       //
	//                ROUTES          //
	//                                       //
	///////////////////////////////////////////


	///////////////////////////////////////////
	//                                       //
	//                ON LOAD         //
	//                                       //
	///////////////////////////////////////////

	///////////////////////////////////////////
	//                                       //
	//                ON LOAD         //
	//                                       //
	///////////////////////////////////////////


	///////////////////////////////////////////
	//                                       //
	//           COMPATIBILITIES //
	//                                       //
	///////////////////////////////////////////


	///////////////////////////////////////////
	//                                       //
	//           COMPATIBILITIES             //
	//                                       //
	///////////////////////////////////////////


	///////////////////////////////////////////
	//                                       //
	//               UTL FUNCS               //
	//                                       //
	///////////////////////////////////////////

	
			///////////////////////////////////////////
	//                                       //
	//               UTL FUNCS               //
	//                                       //
	///////////////////////////////////////////


	///////////////////////////////////////////
	//                                       //
	//                EVENTS                 //
	//                                       //
	///////////////////////////////////////////


	///////////////////////////////////////////
	//                                       //
	//                EVENTS                 //
	//                                       //
	///////////////////////////////////////////


	///////////////////////////////////////////
	//                                       //
	//                  FX                   //
	//                                       //
	///////////////////////////////////////////


	///////////////////////////////////////////
	//                                       //
	//                  FX                   //
	//                                       //
	///////////////////////////////////////////


	return {
		initialize : initialize
	};

});
