(function() {
            
            function config($stateProvider, $locationProvider) {
                $locationProvider
                .html5Mode({
                    enabled: true,
                    requireBase: false
                });

                $stateProvider
                .state('/', {
                    url: '/',
                    templateUrl: '/templates/home.html'
                 })
                .state('bio', {
                    url: '/bio',
                    templateUrl: '/templates/bio.html'
                 })
                .state('options', {
                    url: '/options',
                    controller: 'OptionCtrl as optn',
                    templateUrl: '/templates/options.html'
                })
                .state('consultation', {
                    url: '/consultation',
                    templateUrl: '/templates/consultation.html'
                });
            }

            
            angular.module('treeMendous', ['firebase','ui.router'])
                .config(config);
        })();