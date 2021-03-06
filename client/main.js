
////////////// login stettings
Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

////////////// loading-indicator
Meteor.startup(function () {
  Session.setDefault('coursesLoaded', false);
  var region = localStorage.getItem("region")
  if (!region) region = 'all';
  Session.set("region", region);
});


////////////// db-subscriptions:

//Meteor.subscribe('courses', Session.get('region'))
Meteor.subscribe('categories');
Meteor.subscribe('comments');
Meteor.subscribe('events');
Meteor.subscribe('discussions');
Meteor.subscribe('locations');
Meteor.subscribe('messages');
Meteor.subscribe('regions');
Meteor.subscribe('roles');
Meteor.subscribe('votings');
Meteor.subscribe('users');
return Meteor.subscribe('currentUser');



