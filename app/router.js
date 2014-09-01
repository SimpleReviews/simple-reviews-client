import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SimpleReviewsENV.locationType
});

Router.map(function() {
  this.route('signin');
  this.route('signup');

  this.resource('categories', function() {
    this.resource('category', { path: '/:category_id' }, function() {

    });
  });
  this.resource('products', function() {
    this.route('new');
    this.resource('product', { path: '/:product_id' }, function() {

    });
  });
});

export default Router;
