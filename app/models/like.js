import DS from 'ember-data';

var belongsTo = DS.belongsTo;

var Like = DS.Model.extend({
  review: belongsTo('review'),
  user: belongsTo('user')
});

Like.reopenClass({
  FIXTURES: [
    {
      id: 1,
      review: 1,
      user: 1
    }
  ]
});

export default Like;
