// List of links
Template.linkList.helpers({ // available to <template name="linkList">
    'link': function(){
        var currentUserId = Meteor.userId();
        return LinkList.find({createdBy: currentUserId}, {sort: {createdAt: -1}});
    }
});

Template.linkList.events({
    'click .remove': function(){
        var linkId = this._id;
        // if we wanted to store this in a session, e.g. if the remove button was in a diff template, just do
        // Session.set('selectedItem', linkId);
        Meteor.call('removeLink', linkId);
    }
});
