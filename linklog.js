LinkList = new Mongo.Collection('links');

if(Meteor.isClient){
    // List of links
    Template.linklog.helpers({ // available to <template name="linklog">
        'link': function(){
            var currentUserId = Meteor.userId();
            return LinkList.find({createdBy: currentUserId}, {sort: {createdAt: -1}});
        }
    });

    Template.linklog.events({
        'click .remove': function(){
            var linkId = this._id;
            // if we wanted to store this in a session, e.g. if the remove button was in a diff template, just do
            // Session.set('selectedItem', linkId);
            Meteor.call('removeLink', linkId);
        }
    });

    // Form to add a new link
    Template.addLinkForm.events({
        'submit form': function(){
            event.preventDefault();
            var url = event.target.url.value; // targets <input name="url">

            // Prepend pasted URL with scheme, cf. http://stackoverflow.com/a/3543207/3456726
            if (!url.match(/^[a-zA-Z]+:\/\//))
            {
                url = 'http://' + url;
            }

            Meteor.call('insertLinkData', url);

            event.target.url.value=''; // clear text field upon submit
        }
    });
}

if(Meteor.isServer){
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
}
