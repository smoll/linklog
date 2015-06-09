(function() {

    'use strict';

    // You can include npm dependencies for support files in tests/cucumber/package.json
    var _ = require('underscore');

    module.exports = function() {

        // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
        var chai     = require('chai'),
            url      = require('url'),
            expect   = chai.expect;
        chai.use(require('chai-string'));

        this.Given(/^I am a new user$/, function(callback) {
            // using solution from https://github.com/xolvio/meteor-cucumber/issues/86
            this.client
                .url(url.resolve(process.env.ROOT_URL, '/'))
                .executeAsync(function(done) {
                    Meteor.loginWithPassword('cucumber@cucumber.com', 'cucumber123', done);
                })
                .call(callback);
        });

        this.Given(/^I am unauthenticated$/, function(callback) {
            // https://gentlenode.com/journal/meteor-5-complete-cheatsheet/7
            this.client
                .url(url.resolve(process.env.ROOT_URL, '/'))
                .executeAsync(function(done) {
                    Meteor.logout(done);
                })
                .call(callback);
        });

        this.Then(/^I should see a login interface$/, function (callback) {
            // https://github.com/xolvio/meteor-cucumber/issues/104#issuecomment-103709537
            this.client
                .waitForVisible('body')
                .isExisting('#login-sign-in-link')
                .should.eventually.be.true.and.notify(callback);
        });

        this.Then(/^I should be logged in$/, function (callback) {
            this.client
                .waitForVisible('#login-name-link')
                .getText('#login-name-link', function (err, text) {
                    expect(text).to.startWith('cucumber@cucumber.com');
                })
                .call(callback);
        });

    };

})();
