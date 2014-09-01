import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

var User = DS.Model.extend({
  username: attr('string'),
  email: attr('string'),
  products: hasMany('product'),
  reviews: hasMany('review')
});

export default User;
