/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    torii: {
     sessionServiceName: 'session'
    }
  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.hostUrl = 'http://localhost:3000';
  }

  if (environment === 'test') {

  }

  if (environment === 'production') {
    ENV.hostUrl = 'http://simple-reviews-api.herokuapp.com';
  }

  return ENV;
};
