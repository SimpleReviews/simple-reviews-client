import Ember from 'ember';

export default Ember.ObjectController.extend({

  currentUser: Ember.computed.alias('session.currentUser'),

  videoResults: [],

  photoResults: [],

  nameDidChange: function() {
    this.getRelatedVideos();
    this.getRelatedPhotos();
  }.observes('name'),

  getRelatedVideos: function() {
    var query = {
      q: this.get('name')
    };

    this.store.find('youtube', query)
      .then(results => {
        this.set('videoResults', results);
      });
  },

  getRelatedPhotos: function() {
    var query = {
      name: this.get('instagramTag')
    };

    this.store.find('photo', query)
      .then(results => {
        this.set('photoResults', results);
      });
  },

  actions: {

    addPositiveReview: function() {
      var review = this.store.createRecord('review', {
        body: this.get('positiveReview'),
        reviewType: 'positive',
        product: this.get('model'),
        user: this.get('currentUser')
      });
      review.save();
      this.set('positiveReview', '');
    },

    addNegativeReview: function(body) {
      var review = this.store.createRecord('review', {
        body: this.get('negativeReview'),
        reviewType: 'negative',
        product: this.get('model'),
        user: this.get('currentUser')
      });
      review.save();
      this.set('negativeReview', '');
    },

    likeReview: function(review) {
      var like = this.store.createRecord('like', {
        review: review,
        user: this.get('currentUser')
      });
      like.save();
    }
  }

});
