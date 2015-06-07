(function() {

    'use strict';

    module.exports = function() {

        this.Before(function(callback) {
            this.server.call('reset').then(callback); // calls #reset method in fixtures
        });

    };

})();
