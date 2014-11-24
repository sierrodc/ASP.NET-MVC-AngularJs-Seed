angular.module('emixApp.controllers').controller('fileupload_index', ['$scope', function ($scope) {

    $scope.title = 'File upload';

    $scope.options = {
        url: Emix.Api.Test.uploadUrl,
        maxFileSize: 5000000,
        autoUpload: false,
        acceptFileTypes: /.*/i // /(\.|\/)(gif|jpe?g|png)$/i
    };

    //if (!isOnGitHub) {
    //    $scope.loadingFiles = true;
    //    $http.get(url)
    //        .then(
    //            function (response) {
    //                $scope.loadingFiles = false;
    //                $scope.queue = response.data.files || [];
    //            },
    //            function () {
    //                $scope.loadingFiles = false;
    //            }
    //        );
    //}

}]);
