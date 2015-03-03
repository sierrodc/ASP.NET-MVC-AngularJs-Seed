(function () {
    'use strict';

    angular.module('emixApp',
        ['ngRoute',
        'ngCookies',
        'ngLocale',
        'ngAnimate',
        'emixApp.controllers',
        'emixApp.directives',
        'emixApp.services',
        'ui.bootstrap', //ui boostrap must be loaded before ngStrap
        'ui.slimscroll',
        'ui.calendar',
        'ui.emixLte', //AdminLte specific code
        'mgcrea.ngStrap',
        'ngMorris',
        'pascalprecht.translate',
        'blueimp.fileupload'
        ])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when('/dashboard', {
                    controller: 'dashboard_index',
                    templateUrl: 'ngApp/pages/samples/dashboard/index.html'
                })
                .when('/charts/morris', {
                    controller: 'section_index',
                    templateUrl: 'ngApp/pages/samples/section/index.html'
                })
                .when('/fileupload', {
                    controller: 'fileupload_index',
                    templateUrl: 'ngApp/pages/samples/fileupload/index.html'
                })
                .when('/blank', {
                    controller: 'blank_index',
                    templateUrl: 'ngApp/pages/samples/blank/index.html'
                })
                .when('/fullcalendar', {
                    controller: 'fullcalendar_index',
                    templateUrl: 'ngApp/pages/samples/fullcalendar/index.html'
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

            $translateProvider.preferredLanguage(Emix.Settings.defaultLanguage);
            $translateProvider.fallbackLanguage(Emix.Settings.defaultLanguage);

            $translateProvider.storagePrefix('emix');
            $translateProvider.storageKey('lang');

            $translateProvider.useCookieStorage();
        }]);

    angular.module('emixApp.services', []);
    angular.module('emixApp.controllers', []);
    angular.module('emixApp.directives', []);
}());