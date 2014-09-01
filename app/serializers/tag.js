import ApplicationSerializer from 'simple-reviews/serializers/application';

export default ApplicationSerializer.extend({
  extractFindQuery: function(store, type, payload, id, requestType){
    if (payload.tags.length) {
      payload.tags.map(function(tag) {
        tag.id = tag.name;
        return tag;
      });
    }
    return this.extractArray(store, type, payload, id, requestType);
  }
});
