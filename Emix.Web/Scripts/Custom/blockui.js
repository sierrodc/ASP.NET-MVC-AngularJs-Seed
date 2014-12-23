
; (function () {
    "use strict";

    function setup($) {

        $.blockUI = function (opts) { install(window, opts); };
        $.unblockUI = function (opts) { remove(window, opts); };

        
        var pageBlock = null;

        function install(/*el*/) {
            
            if (pageBlock)
                remove();

            pageBlock = $('<div class="loader"><div class="spinner"></div></div>');
            
            pageBlock.prependTo("body");
        }

        // remove the block
        function remove() {
            pageBlock.fadeOut("fast", function () {
                pageBlock.remove();
                pageBlock = null;
            });
            
        }
    }


    /*global define:true */
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        define(['jquery'], setup);
    } else {
        setup(jQuery);
    }

})();