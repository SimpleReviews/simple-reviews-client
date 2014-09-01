import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signup: function() {
      var self = this;
      var route = this;
      var controller = this.controllerFor('signup');
      var data = controller.getProperties('username', 'email', 'password',
                                          'confirmPassword');

      if (!data.username || !data.email || !data.password) return;

      if (data.password !== data.confirmPassword)
        return controller.set('error', "Passwords don't match.");

      Ember.$.ajax({
        url: 'http://localhost:3000/signup',
        type: 'POST',
        data: {
          user: data
        }
      }).then(function(data) {
        return self.get('session').open('application', {
          email: controller.get('email'),
          password: controller.get('password')
        });
      }).then(function() {
        route.transitionTo('categories');
      }).fail(function(error) {
        controller.set('error', error.responseJSON.error);
      });
    }
  }
});
