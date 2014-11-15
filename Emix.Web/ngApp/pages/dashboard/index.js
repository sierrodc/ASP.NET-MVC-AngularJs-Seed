angular.module('emixApp.controllers').controller('dashboard_index',
    ['$scope', '$window', '$translate', 'httpServices', function ($scope, $window, $translate, httpServices) {

        $scope.title = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        $scope.username = "";
        $scope.helloMessage = '';

        $scope.progressStart = function () {
            NProgress.start();
        };
        $scope.progressEnd = function () {
            NProgress.done();

            $scope.title = 'Pippo';
            $window.location.reload();
        };

        $scope.changeLanguage = function (languageKey) {
            $translate.use(languageKey);
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
