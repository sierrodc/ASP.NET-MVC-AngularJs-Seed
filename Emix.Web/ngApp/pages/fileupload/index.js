/*global _: false*/
angular.module('emixApp.controllers').controller('fileupload_index', ['$scope', 'httpServices', function ($scope, httpServices) {
    'use strict';

    $scope.title = 'File upload';

    $scope.options = {
        url: Emix.Api.Test.uploadFiles,
        maxFileSize: 5000000,
        autoUpload: false,
        acceptFileTypes: /.*/i // /(\.|\/)(gif|jpe?g|png)$/i
    };

    $scope.queue = [{ id: 'e14c35d2-2e7d-4885-a32a-d7982e780b29', name: 'not_able_to_delete_fake.txt', size: 44, url: '#', error: null }];

    $scope.deleteFile = function (file) {
        $.blockUI();
        httpServices.deleteFile(file.id)
            .success(function (data/*, status, headers, config*/) {
                if (data) {
                    _.remove($scope.queue, function (c) { return c.id === file.id; });
                }
            })
            .error(function (/*data, status, headers, config*/) {
                toastr.error("Unable to delete file");
            })
            .finally(function () {
                NProgress.done();
                $.unblockUI();
            });
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
