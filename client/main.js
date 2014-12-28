Router.configure({
  layoutTemplate: 'siteLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/home');
Router.route('/about');
Router.route('/counter');

