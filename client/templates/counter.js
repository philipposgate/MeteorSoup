Session.set("counter", 0);


Template.counter.helpers({
    counter : function () {
        return Session.get("counter");
    }
});

Template.counter.events({
    'click input': function () {
        console.log("You pressed the button");

        var counter = Session.get("counter");
        counter = counter + 1;
        console.log(counter);
        Session.set("counter", counter);
    }
});

