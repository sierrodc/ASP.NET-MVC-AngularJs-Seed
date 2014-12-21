angular.module('ui.emixLte', []).directive('ngToggleAsideLte', function () {
    'use strict';

    return {
        restrict: 'A',
        link: function ($scope, $elem, $attr) {
            $($elem).click(function (e) {
                e.preventDefault();

                //If window is small enough, enable sidebar push menu
                if ($(window).width() <= 992) {
                    $('.row-offcanvas').toggleClass('active');
                    $('.left-side').removeClass("collapse-left");
                    $(".right-side").removeClass("strech");
                    $('.row-offcanvas').toggleClass("relative");
                } else {
                    //Else, enable content streching
                    $('.left-side').toggleClass("collapse-left");
                    $(".right-side").toggleClass("strech");
                }
            });
        }
    };
});