angular.module('emixApp',
    ['ngRoute',
    'emixApp.controllers',
    'emixApp.directives',
    'emixApp.services',
    'mgcrea.ngStrap',
    'ngMorris',
    //'ngGoogleMap'
    'pascalprecht.translate'
    ])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/dashboard', {
                controller: 'dashboard_index',
                templateUrl: 'ngApp/pages/dashboard/index.html'
            })
            .when('/section', {
                controller: 'section_index',
                templateUrl: 'ngApp/pages/section/index.html'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });

    }])
    .config(['$translateProvider', function ($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: Emix.Web.translationsFolder,
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('it_IT');
        
        $translateProvider.storageKey('lang');
        $translateProvider.storagePrefix('emix');

        // $translateProvider.useLocalStorage();
    }]);

angular.module('emixApp.services', []);
angular.module('emixApp.controllers', []);
angular.module('emixApp.directives', []);
