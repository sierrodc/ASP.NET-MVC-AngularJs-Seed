(function () {
    'use strict';

    angular.module('ngMorris.directive', [])
        .directive('ngMorrisAreaChart', function () {
            return {
                restrict: 'A',
                require: '^ngModel',
                scope: {
                    ngModel: '=', //data array
                    moXKey: '@', //x property in data array
                    moYKeys: '@', //values to show as y (=> multiple lines)
                    moLabels: '@',
                    moPointSize: '@',
                    moHideHover: '@',
                    moResize: '@',
                    moParseTime: '@'
                },
                template: '<div></div>',
                controller: ['$scope', function (/*$scope*/) {
                    //nothing
                }],
                link: function (scope, iElement, iAttrs/*, ctrl*/) {
                    Morris.Area({
                        element: iElement[0],
                        data: scope.ngModel,
                        xkey: iAttrs.moXKey,
                        ykeys: eval(iAttrs.moYKeys),// jshint ignore:line
                        labels: eval(iAttrs.moLabels),// jshint ignore:line
                        pointSize: parseInt(iAttrs.moPointSize),
                        hideHover: iAttrs.moHideHover,
                        resize: parseInt(iAttrs.moResize),
                        parseTime: parseInt(iAttrs.moParseTime)
                    });
                }
            };
        }).directive('ngMorrisBarChart', function () {
            return {
                restrict: 'A',
                require: '^ngModel',
                scope: {
                    ngModel: '=', //data array
                    moXKey: '@', //x property in data array
                    moYKeys: '@', //values to show as y (=> multiple lines)
                    moLabels: '@',
                    moPointSize: '@',
                    moHideHover: '@',
                    moResize: '@',
                    moParseTime: '@'
                },
                template: '<div></div>',
                controller: ['$scope', function (/*$scope*/) {
                    //nothing
                }],
                link: function (scope, iElement, iAttrs/*, ctrl*/) {
                    Morris.Bar({
                        element: iElement[0],
                        data: scope.ngModel,
                        xkey: iAttrs.moXKey,
                        ykeys: eval(iAttrs.moYKeys),// jshint ignore:line
                        labels: eval(iAttrs.moLabels),// jshint ignore:line
                        pointSize: parseInt(iAttrs.moPointSize),
                        hideHover: iAttrs.moHideHover,
                        resize: parseInt(iAttrs.moResize),
                        parseTime: parseInt(iAttrs.moParseTime)
                    });
                }
            };
        }).directive('ngMorrisLineChart', function () {
            return {
                restrict: 'A',
                require: '^ngModel',
                scope: {
                    ngModel: '=', //data array
                    moXKey: '@', //x property in data array
                    moYKeys: '@', //values to show as y (=> multiple lines)
                    moLabels: '@',
                    moPointSize: '@',
                    moHideHover: '@',
                    moResize: '@',
                    moParseTime: '@'
                },
                template: '<div></div>',
                controller: ['$scope', function (/*$scope*/) {
                    //nothing
                }],
                link: function (scope, iElement, iAttrs/*, ctrl*/) {
                    Morris.Line({
                        element: iElement[0],
                        data: scope.ngModel,
                        xkey: iAttrs.moXKey,
                        ykeys: eval(iAttrs.moYKeys),// jshint ignore:line
                        labels: eval(iAttrs.moLabels),// jshint ignore:line
                        pointSize: parseInt(iAttrs.moPointSize),
                        hideHover: iAttrs.moHideHover,
                        resize: parseInt(iAttrs.moResize),
                        parseTime: parseInt(iAttrs.moParseTime)
                    });
                }
            };
        });


    angular.module('ngMorris', ["ngMorris.directive"]);

}());