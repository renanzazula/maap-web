(function () {
    'use strict';

    var core = angular.module('singApp.core', [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'ngStorage',
        'restangular'
    ]);

    core.run(function ($rootScope, jQuery, $window, $sce) {

        // Moment
        moment.locale('pt-br');

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
            
            jQuery.ajax({
                url: "/info.json",
                dataType: "json",
                cache: false,
                success: function (data) {
                    if (data.frontversion.toString() !== $window.localStorage.getItem('frontversion')) {
                        $window.localStorage.setItem('frontversion', data.frontversion);
                        $window.location.reload(true);
                    }
                }
            });

            $window.scrollTo(0,0); 

            if ($rootScope.menuOpen){
                $rootScope.fnToogleMenu();
            }
            
        });

        $rootScope.toogleMenu = function(menu){
            $rootScope.activeMenu = menu;
            if ($rootScope.menuOpen){
                $rootScope.fnToogleMenu();
            }
        }

        $rootScope.slug = function(str){
            return Slugify.parse(str);
        }

        $rootScope.trusted = function(url){
            return $sce.trustAsResourceUrl(url);
        }

        $rootScope.fnToogleMenu = function(){
            $rootScope.menuOpen = !$rootScope.menuOpen;
            if ($rootScope.menuOpen){
                jQuery('html').addClass('menu--no-scroll');
            }else{
                jQuery('html').removeClass('menu--no-scroll');
            }
        }


        $rootScope.arrProjetos = [
            {
                name:"Cal Sastre",
                location:"Baix Empordà, 2016",
                image:"/assets/images/project-1.jpg",
                description:"Cal Sastre és una botiga de productes locals i artesanals del Baix Empordà, vinculada al museu Gala Dalí de Púbol (Baix Empordà).",
                explain:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images:[
                    "/assets/images/img-1.jpg",
                    "/assets/images/img-2.jpg",
                    "/assets/images/img-3.jpg",
                ]
            },
            {
                name:"Barcelona",
                location:"Alt Empordà, 2018",
                image:"/assets/images/project-2.jpg",
                description:"Barcelona locals i artesanals del Baix Empordà, vinculada al museu Gala Dalí de Púbol (Alt Empordà).",
                explain:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images:[
                    "/assets/images/img-2.jpg",
                    "/assets/images/img-3.jpg",
                    "/assets/images/img-1.jpg",
                ]
            },
            {
                name:"Real Madri",
                location:"Med Empordà, 2019",
                image:"/assets/images/project-3.jpg",
                description:"Madri locals i artesanals del Baix Empordà, vinculada al museu Gala Dalí de Púbol (Med Empordà).",
                explain:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images:[
                    "/assets/images/img-1.jpg",
                    "/assets/images/img-2.jpg",
                    "/assets/images/img-3.jpg",
                ]
            }
        ]

                

    });

    core.config(appConfig);
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'RestangularProvider', '$httpProvider', 'appSettings', '$locationProvider'];
    function appConfig($stateProvider, $urlRouterProvider, RestangularProvider, $httpProvider, appSettings, $locationProvider) {
        var API_URL = appSettings.API_URL;

        $stateProvider.state('app', {
            abstract: true,
            templateUrl: 'app/modules/_core/app.html'
        });

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('app.home');
        });

        $locationProvider.html5Mode(true);
        RestangularProvider.setBaseUrl(API_URL);

    }

})();
