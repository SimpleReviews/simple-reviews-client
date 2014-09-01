import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor('signin').reset();
  },

  actions: {
    signin: function() {
      console.log('signin');
      var route = this;
      var controller = this.controllerFor('signin');
      var providerName = 'application';
      // argument to open is passed into the provider
      this.get('session').open(providerName, {
        email: controller.get('email'),
        password: controller.get('password')
      }).then(function() {
        // authorization as returned by the provider
        route.transitionTo('categories');
      }, function(error) {
        controller.set('error', error.responseJSON.error);
      });
    }
  }
});
