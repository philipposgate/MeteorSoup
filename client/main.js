

Router.configure({
  layoutTemplate: 'siteLayout',
  load: function() {
    // $('html, body').animate({scrollTop: 0}, 400);
    // $('.content').hide().fadeIn(800);
  }
});

Router.map( function () {

  this.route('home', {
    path: '/'
  });

  this.route('about', {
  });

  this.route('contact', {
  });
});




if (Meteor.isClient) {
  Session.set("counter", 0);


  Template.hello.greeting = function () {
    return "Welcome to Meteor Soup.";
  };

  Template.hello.counter = function () {
    return Session.get("counter");
  };

  Template.hello.events({
    'click input': function () {
      console.log("You pressed the button");

      var counter = Session.get("counter");
      counter = counter + 1;
      console.log(counter);
      Session.set("counter", counter);
    }
  });

  Template.navbar.helpers({
    activeIfTemplateIs: function (template) {
      var currentRoute = Router.current();
      return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
    }
  });

}

