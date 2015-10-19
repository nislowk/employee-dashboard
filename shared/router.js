Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
});

Router.map(function () {
  this.route('home', {
  });

  this.route('analysis', {
  	
  });

  this.route('expense', {
  	
  });

  this.route('value', {
  	
  });

});
