
angular.module('emixApp.services').service('httpServices', ['$http', function ($http) {
    'use strict';

    return {
        sayHello: function (name) {
            return $http({
                method: "GET",
                url: Emix.Api.Test.sayHello,
                cache: false,
                params: { name: name }
            });
        },
        deleteFile: function (fileId) {
            return $http({
                method: "DELETE",
                url: Emix.Api.Test.deleteFile + "/" + fileId,
                cache: false
            });
        },

        getTable: function () {
            return $http({
                method: "GET",
                url: Emix.Api.Test.getTable,
                cache: false
            });
        },

        addRandomRow: function () {
            return $http({
                method: "POST",
                url: Emix.Api.Test.addRandomRow,
                cache: false
            });
        },

        addRandomColumn: function () {
            return $http({
                method: "POST",
                url: Emix.Api.Test.addRandomColumn,
                cache: false
            });
        }
    };
}]);