import Ember from 'ember';

var debounce = Ember.run.debounce;

export default Ember.Controller.extend({

  selectedProduct: null,

  selectedTag: null,

  selectedPhoto: null,

  searchQuery: '',

  tagQuery: '',

  reset: function() {
    this.set('selectedProduct', null);
    this.set('selectedTag', null);
    this.set('searchResults', []);
    this.set('tagResults', []);
    this.set('photoResults', []);
  }.on('init'),

  searchQueryDidChange: function() {
    debounce(this, this.getSearchResults, 200);
  }.observes('searchQuery'),

  tagQueryDidChange: function() {
    debounce(this, this.getTagResults, 200);
  }.observes('tagQuery'),

  getSearchResults: function() {
    var query = this.get('searchQuery');

    if (!query) {
      this.set('searchResults', []);
      return;
    }

    this.store.find('semantics3', { q: query })
      .then(results => {
        this.set('searchResults', results);
      });
  },

  getTagResults: function() {
    var query = this.get('tagQuery');

    if (!query) {
      this.set('tagResults', []);
      return;
    }

    this.store.find('tag', { q: query })
      .then(results => {
        this.set('tagResults', results);
      });
  },

  selectedTagDidChange: function() {
    var query = {
      name: this.get('selectedTag.name')
    };

    this.store.find('photo', query)
      .then(results => {
        this.set('photoResults', results);
      });
  }.observes('selectedTag'),

  actions: {

    selectProduct: function(product) {
      this.set('selectedProduct', product);
    },

    selectTag: function(tag) {
      this.set('selectedTag', tag);
    },

    selectPhoto: function(photo) {
      this.set('selectedPhoto', photo);
    },

    reset: function() {
      this.reset();
    }
  }
});
