/* jshint undef: true, unused: true, esversion: 6, asi: true */

window.angular
    .module('myApp', ['ngRoute'])
    .controller('MainCtrl', MainCtrl)
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/AddedSalesPeople', {
                controller: 'MainCtrl',
                templateUrl: 'templates/added-sales-people.html'
            })
            .when('/GetAllSalesPeople', {
                controller: 'MainCtrl',
                templateUrl: 'templates/get-all-sales-people.html'
            })
            .when('/MeanAbsoluteDeviation', {
                controller: 'MainCtrl',
                templateUrl: 'templates/mean-absolute-deviation.html'
            })
            .when('/SampleCovariance', {
                controller: 'MainCtrl',
                templateUrl: 'templates/sample-covariance.html'
            })
            .when('/AddedProducts', {
                controller: 'MainCtrl',
                templateUrl: 'templates/added-products.html'
            })
            .when('/ProductsToOrder', {
                controller: 'MainCtrl',
                templateUrl: 'templates/products-to-order.html'
            })
            .otherwise({
                redirectTo: '/AddedSalesPeople'
            })
    }])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('')
    }])
    .directive('onReadFile', OnReadFile.directiveFactory)
    .factory('message', Message.getReturn)
    .factory('parser', Parser.getReturn)
