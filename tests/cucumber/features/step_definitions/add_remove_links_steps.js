(function() {

    'use strict';

    // You can include npm dependencies for support files in tests/cucumber/package.json
    var _ = require('underscore');

    module.exports = function() {

        this.Then(/^I should not be able to add a link$/, function(callback) {
            // Write code here that turns the phrase above into concrete actions
            callback.pending();
        });

        this.When(/^I add a new link$/, function(callback) {
            // Write code here that turns the phrase above into concrete actions
            callback.pending();
        });

        this.Then(/^the link should be visible$/, function(callback) {
            // Write code here that turns the phrase above into concrete actions
            callback.pending();
        });

        this.Then(/^the link should still be visible$/, function(callback) {
            // Write code here that turns the phrase above into concrete actions
            callback.pending();
        });

    };

})();
