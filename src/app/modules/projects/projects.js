(function () {
	'use strict';

	var module = angular.module('singApp.projects', []);

	module.controller('ProjectsController', function ($rootScope, $timeout, $state) {
		var vm = this;

		$rootScope.toogleMenu('');
		vm.project = $rootScope.arrProjetos[$state.params.id-1];

		$timeout(function(){
			jQuery('a.carousel-control').click(function(event){
				event.preventDefault();
			});
		});

	});

	module.config(appConfig);
	appConfig.$inject = ['$stateProvider'];
	function appConfig($stateProvider) {
		$stateProvider.state('app.projects', {
			url: '/project/:id/:name',
			templateUrl: 'app/modules/projects/projects.html',
			controller: 'ProjectsController',
			controllerAs: 'vm'
		})
	}

})();