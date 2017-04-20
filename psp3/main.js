/* jshint undef: true, unused: true, esversion: 6, asi: true */

window.angular
    .module('myApp', [])
    .config(function($routeProvider) {
        $routeProvider
            .when('/AddedSalesPeople', {
                controller: 'MainCtrl',
                templateUrl: 'templates/added-sales-people.html'
            })
            .when('/GetAllSalesPeople', {
                controller: 'MainCtrl',
                templateUrl: 'templates/get-all-sales-people.html'
            })
            .otherwise({
                redirectTo: ''
            })
    })
    .controller('MainCtrl', MainCtrl)
    .directive('onReadFile', OnReadFile.directiveFactory)
    .factory('message', Message.getReturn)
    .factory('parser', Parser.getReturn)
