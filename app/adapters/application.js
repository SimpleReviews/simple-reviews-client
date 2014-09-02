import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: SimpleReviewsENV.hostUrl
});

/*
export default DS.FixtureAdapter.extend({});
*/
