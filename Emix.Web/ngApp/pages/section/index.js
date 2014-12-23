
angular.module('emixApp.controllers').controller('section_index', ['$scope', function ($scope) {
    'use strict';

    $scope.title = 'Section';

    $scope.lines = [
        { x: 'jan-mar', a1:  4, a2: 12 },
        { x: 'apr-jun', a1: 10, a2: 13 },
        { x: 'jul-sep', a1: 18, a2: 10 },
        { x: 'oct-dec', a1: 15, a2: 6 }
    ];
}]);
