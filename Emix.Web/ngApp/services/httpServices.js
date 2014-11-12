angular.module('emixApp.services').service('httpServices', ['$http', function ($http) {

    return {
        sayHello: function (name) {
            return $http({
                method: "GET",
                url: Emix.Api.Test.sayHello,
                cache: false,
                params: {name: name}
            })
        }
    };
}]);