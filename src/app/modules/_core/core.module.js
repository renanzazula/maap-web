(function () {
    'use strict';

    var core = angular.module('singApp.core', [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'ngStorage',
        'restangular'
    ]);

    core.run(function ($rootScope, jQuery, $window, $sce, $timeout) {

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

        $rootScope.lang="es";
        jQuery(document).on('change', "#sll", function(event){
            $timeout(function(){
                $rootScope.lang = jQuery(event.target).val();
            })
        });

        $rootScope.translate = function(str){
            var languages = {
                "es":{
                    we:"Nosaltres",
                    contact:"Contacte",
                    about:"maap. és una empresa que uneix tres disciplines dedicades al disseny i transformació d'espais. Ofereix serveis d'interiorisme, arquitectura i espais efímers (direcció d'art i escenografia).",
                    es:"Esp",
                    en:"Ingles",
                    ca:"Catalan"
                },
                "ca":{
                    we:"Nosaltres",
                    contact:"Contacte",
                    about:"maap. és una empresa que uneix tres disciplines dedicades al disseny i transformació d'espais. Ofereix serveis d'interiorisme, arquitectura i espais efímers (direcció d'art i escenografia).",
                    es:"Esp",
                    en:"Ingles",
                    ca:"Catalan"
                },
                "en":{
                    we:"About",
                    contact:"Contact",
                    about:"maap. is a company that unites three disciplines dedicated to the design and transformation of spaces. Offers interior design, architecture and ephemeral services (art direction and scenography)",
                    es:"Spanish",
                    en:"English",
                    ca:"Catalan"
                },
            }

            if (languages[$rootScope.lang][str]){
				return languages[$rootScope.lang][str];
			}else{
				return varname;
			}

        }

        $rootScope.arrProjetos = [
            {
                name:{
                    es:"Cal Sastre",
                    en:"Call Sastre",
                    ca:"Cal Sastre"
                },
                location:{
                    es:"Baix Empordà, 2016",
                    en:"Low Season, 2016",
                    ca:"Baix Empordà, 2016"
                },
                image:"/assets/images/project-1.jpg",
                description:{
                    es:"Cal Sastre es una tienda de productos locales y artesanales del Baix Empordà, vinculada al museo Gala Dalí de Púbol (Baix Empordà).",
                    en:"Cal Sastre is a shop of local and artisanal products from the Low Season, linked to the Gala Dalí Museum in Púbol (Low Season).",
                    ca:"Cal Sastre és una botiga de productes locals i artesanals del Baix Empordà, vinculada al museu Gala Dalí de Púbol (Baixa Empordà)."
                },
                explain:{
                    es:"Espanhol - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    en:"English - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    ca:"Catalan - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                images:[
                    "/assets/images/img-1.jpg",
                    "/assets/images/img-2.jpg",
                    "/assets/images/img-3.jpg",
                ]
            },
            {
                name:{
                    es:"Barcelona",
                    en:"Barcelona",
                    ca:"Barcelona"
                },
                location:{
                    es:"Alt Empordà, 2018",
                    en:"High Season, 2018",
                    ca:"Alt Empordà, 2018"
                },
                image:"/assets/images/project-2.jpg",
                description:{
                    es:"Barcelona es una tienda de productos locales y artesanales del Baix Empordà, vinculada al museo Gala Dalí de Púbol (Baix Empordà).",
                    en:"Barcelona is a shop of local and artisanal products from the Low Season, linked to the Gala Dalí Museum in Púbol (Low Season).",
                    ca:"Barcelona és una botiga de productes locals i artesanals del Baix Empordà, vinculada al museu Gala Dalí de Púbol (Baixa Empordà)."
                },
                explain:{
                    es:"Espanhol - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    en:"English - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    ca:"Catalan - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                images:[
                    "/assets/images/img-2.jpg",
                    "/assets/images/img-3.jpg",
                    "/assets/images/img-1.jpg",
                ]
            },
            {
                name:{
                    es:"Real Madri",
                    en:"Real Madri",
                    ca:"Real Madri"
                },
                location:{
                    es:"Med Empordà, 2019",
                    en:"Middle Season, 2019",
                    ca:"Med Empordà, 2019"
                },
                image:"/assets/images/project-3.jpg",
                description:{
                    es:"Madri es una tienda de productos locales y artesanales del Baix Empordà, vinculada al museo Gala Dalí de Púbol (Baix Empordà).",
                    en:"Madri is a shop of local and artisanal products from the Low Season, linked to the Gala Dalí Museum in Púbol (Low Season).",
                    ca:"Madri és una botiga de productes locals i artesanals del Baix Empordà, vinculada al museu Gala Dalí de Púbol (Baixa Empordà)."
                },
                explain:{
                    es:"Espanhol - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    en:"English - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    ca:"Catalan - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
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
