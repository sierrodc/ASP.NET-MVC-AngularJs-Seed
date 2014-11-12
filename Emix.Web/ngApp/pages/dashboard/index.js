angular.module('emixApp.controllers').controller('dashboard_index', ['$scope', 'httpServices', function ($scope, httpServices) {

    $scope.title = 'Example';
    $scope.username = 'Bob';
    $scope.helloMessage = '';

    $scope.progressStart = function () {
        NProgress.start();
    };
    $scope.progressEnd = function () {
        NProgress.done();
    };

    $scope.sayHello = function () {
        NProgress.start();
        $.blockUI();

        httpServices.sayHello($scope.username)
            .success(function (data, status, headers, config) {
                $scope.helloMessage = data;
            })
            .error(function (data, status, headers, config) {
                $scope.helloMessage = 'ERROR FROM SERVER';
            })
            .finally(function () {
                NProgress.done();
                $.unblockUI();
            });
    };
}]);
