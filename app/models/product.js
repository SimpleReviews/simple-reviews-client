import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;
var belongsTo = DS.belongsTo;

var Product = DS.Model.extend({
  name: attr('string'),
  category: belongsTo('category'),
  productData: attr(),
  instagramTag: attr('string'),
  reviews: hasMany('review'),
  user: belongsTo('user'),

  positiveReviews: function() {
    return this.get('reviews').filter(item => {
      return item.get('reviewType') === 'positive';
    });
  }.property('reviews.@each.reviewType'),

  negativeReviews: function() {
    return this.get('reviews').filter(item => {
      return item.get('reviewType') === 'negative';
    });
  }.property('reviews.@each.reviewType')

});

Product.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "Wayne's World",
      category: 1,
      productData: {},
      instagramTag: 'waynesworld',
      reviews: [1, 2],
      user: 1
    }
  ]
});

export default Product;
