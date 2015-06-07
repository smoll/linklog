(function() {

    'use strict';

    // You can include npm dependencies for support files in tests/cucumber/package.json
    var _ = require('underscore');

    module.exports = function() {

        // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
        var url = require('url');

        this.Given(/^I am a new user$/, function(callback) {
            this.client.call(callback); // TODO: replace with the below, after login is implemented
            // // using solution from https://github.com/xolvio/meteor-cucumber/issues/86
            // this.client
            //     .url(url.resolve(process.env.ROOT_URL, '/'))
            //     .executeAsync(function(done) {
            //         Meteor.loginWithPassword('cucumber', 'cucumber123', done);
            //     })
            //     .call(callback);
        });

        this.When(/^I navigate to "([^"]*)"$/, function(relativePath, callback) {
            // WebdriverIO supports Promises/A+ out the box, so you can return that too
            this.client. // this.browser is a pre-configured WebdriverIO + PhantomJS instance
            url(url.resolve(process.env.ROOT_URL, relativePath)). // process.env.ROOT_URL always points to the mirror
            call(callback);
        });

        this.Then(/^I should see the title "([^"]*)"$/, function(expectedTitle, callback) {
            // you can use chai-as-promised in step definitions also
            this.client.
            waitForVisible('body *'). // WebdriverIO chain-able promise magic
            getTitle().should.become(expectedTitle).and.notify(callback);
        });

    };

})();
