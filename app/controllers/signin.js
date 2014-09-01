import Ember from 'ember';

export default Ember.Controller.extend({
  reset: function() {
    this.set('error', '');
    this.set('email', '');
    this.set('password', '');
  }.on('init')
});
