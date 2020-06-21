(function () {
    'use strict';

    var hostName = window.location.hostname;

    if (hostName == "localhost" || hostName == "127.0.0.1" || hostName.indexOf('192') != -1) {
        var API_URL = 'http://' + hostName + ':3000/api/';
        var SITE_URL = 'http://' + hostName + ':8080/';
        var IS_DEV = true;

    }else {
        var API_URL = window.location.origin.replace(/www./,'api.')+"/";
        var SITE_URL = window.location.origin+"/";
        var IS_DEV = false;
    }

    angular
        .module('singApp.core')
        .controller('App', AppController)
        .factory('jQuery', jQueryService)
        .constant('appSettings', {
            'API_URL': API_URL,
            'SITE_URL': SITE_URL,
            'IS_DEV':IS_DEV
        });

    AppController.$inject = ['$scope', '$state'];
    function AppController($scope, $state) {
        $scope.$state = $state;
    }

    jQueryService.$inject = ['$window'];
    function jQueryService($window) {
        return $window.jQuery;
    }

})();
