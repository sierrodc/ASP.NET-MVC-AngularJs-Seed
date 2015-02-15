angular.module('emixApp.controllers').controller('dashboard_index',
    ['$scope', 'httpServices', function ($scope, httpServices) {
        'use strict';


        $scope.title = new Date();
        $scope.username = "";
        $scope.helloMessage = '';
        $scope.scopedNumber = 123456789;

        $scope.progressStart = function () {
            NProgress.start();

            $scope.scopedNumber++;
            $scope.title = new Date();
        };
        $scope.progressEnd = function () {
            NProgress.done();
        };

        $scope.sayHello = function () {
            NProgress.start();
            $.blockUI();

            httpServices.sayHello($scope.username)
                .success(function (data/*, status, headers, config*/) {
                    $scope.helloMessage = data.message;
                })
                .error(function (/*data, status, headers, config*/) {
                    $scope.helloMessage = 'ERROR FROM SERVER';
                })
                .finally(function () {
                    NProgress.done();
                    $.unblockUI();
                });
        };
    }]);
