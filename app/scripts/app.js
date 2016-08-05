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
            controller: 'ApptCtrl as appt',
            templateUrl: '/templates/consultation.html'
        })
        .state('admin', {
            url: '/admin',
            controller: 'ApptCtrl as appt',
            templateUrl: '/templates/admin.html'
        });
    }

            
    angular.module('treeMendous', ['firebase','ui.router'])
        .config(config);
})();