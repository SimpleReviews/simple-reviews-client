import DS from 'ember-data';

var attr = DS.attr;
var belongsTo = DS.belongsTo;
var hasMany = DS.hasMany;

var Review = DS.Model.extend({
  body: attr('string'),
  reviewType: attr('string'),
  likes: hasMany('like'),
  product: belongsTo('product'),
  user: belongsTo('user')
});

Review.reopenClass({
  FIXTURES: [
    {
      id: 1,
      body: 'Excellent!',
      reviewType: 'positive',
      likes: [1],
      product: 1,
      user: 1
    }, {
      id: 2,
      body: 'Sucks!',
      reviewType: 'negative',
      likes: [1],
      product: 1,
      user: 1
    }
  ]
});

export default Review;
