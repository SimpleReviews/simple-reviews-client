import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

var Category = DS.Model.extend({
  name: attr(),
  products: hasMany('product')
});

Category.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Movies',
      products: [1]
    }
  ]
});

export default Category;
