angular.module('emixApp.controllers').controller('appMenu', ['$location', '$scope', function ($location, $scope) {

    $scope.isActive = function (path) {
        return $location.path().substr(0, path.length) == path;
    };


}]);
