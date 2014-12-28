Session.set("counter", 0);


Template.hello.helpers({
    greeting : function () {
    return "Welcome to Meteor Soup.";
    },

    counter : function () {
    return Session.get("counter");
    }
});

Template.hello.events({
    'click input': function () {
        console.log("You pressed the button");

        var counter = Session.get("counter");
        counter = counter + 1;
        console.log(counter);
        Session.set("counter", counter);
    }
});