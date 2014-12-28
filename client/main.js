Router.configure({
  layoutTemplate: 'siteLayout',
  load: function() {
    // $('html, body').animate({scrollTop: 0}, 400);
    // $('.content').hide().fadeIn(800);
  }
});

Router.route('/', function () {
  this.render('home');
});
Router.route('/home');
Router.route('/about');
Router.route('/contact');

