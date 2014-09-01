import Ember from 'ember';

export default Ember.Object.extend({

  fetch: function() {
    var store = this.get('store');
    var token = localStorage.token;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!token) {
        return reject();
      }

      Ember.$.ajax({
        url: 'http://localhost:3000/session',
        type: 'GET',
        headers: {
          'Authorization': token
        },
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }).then(function(data) {
      store.pushPayload('user', data);
      return store.find('user', data.user.id);
    }).then(function(user) {
      return {
        currentUser: user
      };
    });
  },

  open: function(authorization) {
    var token = authorization.token;

    localStorage.token = token;

    $.ajaxSetup({
      headers: {
        'Authorization': token
      }
    });

    return this.fetch();
  },

  close: function() {
    localStorage.removeItem('token');
    $.ajaxSetup({
      headers: {
        'Authorization': ''
      }
    });

    return {
      currentUser: null
    };
  }
});
