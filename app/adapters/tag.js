import ApplicationAdaper from 'simple-reviews/adapters/application';

export default ApplicationAdaper.extend({
  findQuery: function(store, type, query) {
    var url = this.urlPrefix() + '/instagram/tags';
    return this.ajax(url, 'GET', { data: query });
  }
});
