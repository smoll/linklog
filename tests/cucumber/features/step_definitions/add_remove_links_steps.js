(function() {

    'use strict';

    // You can include npm dependencies for support files in tests/cucumber/package.json
    var _ = require('underscore');

    module.exports = function() {

        var chai     = require('chai'),
            expect   = chai.expect,
            fakeLink = 'http://www.fake' + Math.floor(Date.now() / 1000) + '.com';

        this.Then(/^I should not be able to add a link$/, function(callback) {
            this.client
                .waitForVisible('body *')
                .isExisting('#new-link-url').should.become(false).and.notify(callback);
                // can't do: `.isExisting('#thing').should.be.false.and.notify(callback);`
                // or else we get: expected { state: 'pending' } to be false
                // because of how promises work...?
                // seems related to https://github.com/domenic/chai-as-promised/issues/86
        });

        this.When(/^I add a new link$/, function(callback) {
            this.client
                .setValue('#new-link-url', fakeLink)
                .submitForm('#add-link-form')
                .call(callback);
        });

        this.Then(/^the link should (?:be|still be) visible$/, function(callback) {
            this.client
                .waitForVisible('#list-of-links')
                .getText('.added-link:first-child', function(err, text){
                    expect(text).to.contain(fakeLink)
                })
                .call(callback);
        });

    };

})();
