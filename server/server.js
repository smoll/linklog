Meteor.methods({
    'insertLinkData': function(href) {
        var currentUserId = Meteor.userId();
        LinkList.insert({
            url: href,
            createdBy: currentUserId,
            createdAt: new Date().valueOf()
        });
    },
    'removeLink': function(selectedLink) {
        var currentUserId = Meteor.userId();
        LinkList.remove({
            _id: selectedLink,
            createdBy: currentUserId
        });
    }
});
