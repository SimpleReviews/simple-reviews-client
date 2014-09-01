import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.get('session').fetch('application')
      .catch(function() {
        console.error('Unauthenticated');
      });
  },

  actions: {
    signout: function() {
      this.get('session').close('application', {});
    }
  }
});
