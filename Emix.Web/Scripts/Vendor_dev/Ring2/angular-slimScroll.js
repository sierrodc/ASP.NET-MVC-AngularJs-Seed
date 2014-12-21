//from https://github.com/ziscloud/angular-slimscroll
// + it is possible to specify "full" as height. An event handler will be attached to windows.resize event.
angular.module('ui.slimscroll', []).directive('slimscroll', function () {
    'use strict';

    return {
        restrict: 'A',
        link: function ($scope, $elem, $attr) {
            var off = [];
            var option = {};

            var getHeight = function () {
                var height = $(window).height();

                option.removeFromFullHeight = option.removeFromFullHeight || [];
                _.each(option.removeFromFullHeight, function (selector) {
                    height = height - $(selector).height();
                });
                return height;
            };

            var resizeFunction = _.debounce(function () {
                option.height = getHeight() + "px";
                $($elem).slimScroll({ destroy: true });
                $($elem).slimScroll(option);
            }, 150);

            var refresh = function () {
                if ($attr.slimscroll) {
                    option = $scope.$eval($attr.slimscroll);
                } else if ($attr.slimscrollOption) {
                    option = $scope.$eval($attr.slimscrollOption);
                }
                $($elem).slimScroll({ destroy: true });

                if (option.height == 'full') {
                    option.height = getHeight() + "px";

                    $(window).off("resize", resizeFunction);
                    $(window).resize(resizeFunction);
                }

                $($elem).slimScroll(option);
            };

            var init = function () {
                refresh();

                if ($attr.slimscroll && !option.noWatch) {
                    off.push($scope.$watchCollection($attr.slimscroll, refresh));
                }

                if ($attr.slimscrollWatch) {
                    off.push($scope.$watchCollection($attr.slimscrollWatch, refresh));
                }

                if ($attr.slimscrolllistento) {
                    off.push($scope.$on($attr.slimscrolllistento, refresh));
                }
            };

            var destructor = function () {
                $(window).off("resize", resizeFunction);
                off.forEach(function (unbind) {
                    unbind();
                });
                off = null;
            };

            off.push($scope.$on('$destroy', destructor));
            init();

        }
    };
});