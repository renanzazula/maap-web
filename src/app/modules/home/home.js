(function () {
	'use strict';

	var module = angular.module('singApp.home', []);

	module.controller('HomeController', function ($timeout) {
		var vm = this;

		vm.arrImages = [
			"/assets/images/img-1.jpg",
			"/assets/images/img-2.jpg",
			"/assets/images/img-3.jpg",
			"/assets/images/img-2.jpg",
			"/assets/images/img-3.jpg",
			"/assets/images/img-1.jpg",
		]

		$timeout(function(){
			jQuery('a.carousel-control').click(function(event){
				event.preventDefault();
			});
		});

	});

	module.config(appConfig);
	appConfig.$inject = ['$stateProvider'];
	function appConfig($stateProvider) {
		$stateProvider.state('app.home', {
			url: '/',
			templateUrl: 'app/modules/home/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		})
	}

})();