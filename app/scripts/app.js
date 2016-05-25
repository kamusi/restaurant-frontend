'use strict';


angular.module('webappApp', ['ngResource', 'ui.router', 'ui.bootstrap', 'ngFileUpload'])
    .constant('baseURL', "http://localhost:3000/")
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/form.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
        })
        .state('app.restaurant', {
            url: 'restaurant',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/form.html',
                        controller  : 'RestaurantController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
        })
        .state('app.client', {
            url: 'client',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/form.html',
                        controller  : 'ClientController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
        });
        
        $urlRouterProvider.otherwise('/');
})

;
