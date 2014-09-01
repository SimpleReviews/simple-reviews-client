import DS from 'ember-data';

var attr = DS.attr;

var Semantics3 = DS.Model.extend({
  name: attr(),
  category: attr()
});

Semantics3.reopenClass({
  FIXTURES: [
    {
      sem3_id: 1,
      name: "Wayne's Wold",
      category: 'Movies'
    }
  ]
});

export default Semantics3;
