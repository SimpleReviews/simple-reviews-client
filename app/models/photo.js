import DS from 'ember-data';

var attr = DS.attr;

var Photo = DS.Model.extend({
  link: attr('string'),
  likes: attr(),
  images: attr(),
  caption: attr(),
  user: attr()
});

export default Photo;
