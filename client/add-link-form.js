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
