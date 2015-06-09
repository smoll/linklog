(function() {

    'use strict';

    Meteor.methods({
        'reset': function() {
            Meteor.users.remove({}); // remove all users
            Accounts.createUser({ // create cucumber test user
                email: 'cucumber@cucumber.com',
                password: 'cucumber123'
            });
        }
    });

})();
