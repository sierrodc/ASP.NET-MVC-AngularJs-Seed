
String.prototype.hashCode = function () {
    var hash = 0, i, chr, len;
    if (this.length === 0) return hash;
    for (i = 0, len = this.length; i < len; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

angular.module('emixApp.controllers').controller('blank_index', ['$scope', 'httpServices', function ($scope, httpServices) {
    'use strict';

    $scope.title = 'Blank';

    $scope.table = {
        rows: [],
        columns: [],
        data: []
    };

    $scope.myTrackingFunction = function (str) {
        debugger;
        return str.hashCode();
    };

    $scope.getTable = function () {
        httpServices.getTable()
                .success(function (data/*, status, headers, config*/) {
                    $scope.table = data;
                })
                .error(function (/*data, status, headers, config*/) {
                    toastr.error("Error getTable");
                })
                .finally(function () {
                    NProgress.done();
                    $.unblockUI();
                });
    };

    $scope.addRandomColumn = function () {
        httpServices.addRandomColumn()
                .success(function (data/*, status, headers, config*/) {
                    $scope.table = data;
                })
                .error(function (/*data, status, headers, config*/) {
                    toastr.error("Error addRandomColumn");
                })
                .finally(function () {
                    NProgress.done();
                    $.unblockUI();
                });
    };

    $scope.addRandomRow = function () {
        httpServices.addRandomRow()
                .success(function (data/*, status, headers, config*/) {
                    $scope.table = data;
                })
                .error(function (/*data, status, headers, config*/) {
                    toastr.error("Error addRandomColumn");
                })
                .finally(function () {
                    NProgress.done();
                    $.unblockUI();
                });
    };

    $scope.getData = function (row, col) {
        var colIdx = $scope.table.columns.indexOf(col);
        var rowIdx = $scope.table.rows.indexOf(row);

        return $scope.table.data[rowIdx][colIdx];
    }


    $scope.getTable();

}]);
