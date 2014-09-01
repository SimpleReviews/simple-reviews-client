import Ember from 'ember';

export default Ember.Object.extend({

  open: function(credentials) {
    console.log('provider');
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: 'http://localhost:3000/signin',
        type: 'POST',
        data: {
          email: credentials.email,
          password: credentials.password
        },
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  }
});
