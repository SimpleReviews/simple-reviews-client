import DS from 'ember-data';

var attr = DS.attr;

var Tag = DS.Model.extend({
  mediaCount: attr('number'),
  name: attr('string')
});

export default Tag;
