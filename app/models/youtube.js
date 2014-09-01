import DS from 'ember-data';

var attr = DS.attr;

var Youtube = DS.Model.extend({
  categories: attr(),
  title: attr('string'),
  description: attr('string'),
  author: attr(),
  duration: attr('number'),
  mediaContent: attr(),
  playerUrl: attr('string'),
  thumbnails: attr(),
  viewCount: attr('number'),
  rating: attr()
});

export default Youtube;
