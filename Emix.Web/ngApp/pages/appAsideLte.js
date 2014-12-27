

angular.module('emixApp.controllers').controller('appAsideLte', ['$scope', '$window', '$location', '$translate', function ($scope, $window, $location/*, $translate*/) {
    'use strict';

    $scope.isMenuActive = function (path) {
        return ('#' + $location.path()).substr(0, path.length) === path;
    };

    $scope.expandMenuItem = function (menuEntry) {
        if (menuEntry.isGroup) {
            menuEntry.isExpanded = !menuEntry.isExpanded; //expanded if clicked
        }
    };

    $scope.menuEntries = [
        {
            text: 'Dashboard',
            icon: 'fa-dashboard',
            url: '#/dashboard'
        },
        {
            text: 'File upload',
            icon: 'fa-upload',
            url: '#/fileupload'
        },
        {
            text: 'Charts',
            icon: 'fa-bar-chart-o',
            isGroup: true,
            baseUrl: '#/charts',
            menuEntries: [{
                text: 'Morris',
                icon: 'fa-angle-double-right',
                url: '#/charts/morris'
            }/*, {
                text: '[MISSING] Flot',
                icon: 'fa-angle-double-right',
                url: '/'
            }, {
                text: '[MISSING] Inline charts',
                icon: 'fa-angle-double-right',
                url: '/charts/inline'
            }*/]
        },
        {
            text: 'Fullpage calendar',
            icon: 'fa-calendar',
            url: '#/fullcalendar'
        },
        {
            text: 'Blank page',
            icon: 'fa-file-o',
            url: '#/blank'
        },
        /*{
            text: '[MISSING] Widgets',
            icon: 'fa-th',
            url: '/',
            badge: { text: 'new', style: 'bg-green' }
        },
        {
            text: '[MISSING] UI Elements',
            icon: 'fa-laptop',
            url: '',
            menuEntries: [{
                text: '[MISSING] General',
                icon: 'fa-angle-double-right',
                url: '/'
            }, {
                text: '[MISSING] Icons',
                icon: 'fa-angle-double-right',
                url: '/'
            }, {
                text: '[MISSING] Buttons',
                icon: 'fa-angle-double-right',
                url: '/'
            }, {
                text: '[MISSING] Sliders',
                icon: 'fa-angle-double-right',
                url: '/'
            }, {
                text: '[MISSING] Timeline',
                icon: 'fa-angle-double-right',
                url: '/'
            }]
        },
        {
            text: '[MISSING] Forms',
            icon: 'fa-edit',
            url: '',
            menuEntries: [{
                text: '[MISSING] General Elements',
                icon: 'fa-angle-double-right',
                url: '/'
            }, {
                text: '[MISSING] Advanced Elements',
                icon: 'fa-angle-double-right',
                url: '/'
            }, {
                text: '[MISSING] Editors',
                icon: 'fa-angle-double-right',
                url: '/'
            }]
        },
        {
            text: '[MISSING] Tables',
            icon: 'fa-table',
            url: '',
            menuEntries: [{
                text: '[MISSING] Simple tables',
                icon: 'fa-angle-double-right',
                url: '/'
            }, {
                text: '[MISSING] Data tables',
                icon: 'fa-angle-double-right',
                url: '/'
            }]
        },
        {
            text: '[MISSING] Calendar',
            icon: 'fa-calendar',
            url: '/',
            badge: { text: '3', style: 'bg-red' }
        },
        {
            text: '[MISSING] Mailbox',
            icon: 'fa-envelope',
            url: '/',
            badge: { text: '12', style: 'bg-yellow' }
        },
         {
             text: '[MISSING] Examples',
             icon: 'fa-folder',
             url: '',
             menuEntries: [{
                 text: '[MISSING] Invoice',
                 icon: 'fa-angle-double-right',
                 url: '/'
             }, {
                 text: '[MISSING] Login',
                 icon: 'fa-angle-double-right',
                 url: '/'
             }, {
                 text: '[MISSING] Register',
                 icon: 'fa-angle-double-right',
                 url: '/'
             }, {
                 text: '[MISSING] Lockscreen',
                 icon: 'fa-angle-double-right',
                 url: '/'
             }, {
                 text: '[MISSING] 404 Error',
                 icon: 'fa-angle-double-right',
                 url: '/'
             }, {
                 text: '[MISSING] 500 Error',
                 icon: 'fa-angle-double-right',
                 url: '/'
             }]
         },*/
    ];


}]);
