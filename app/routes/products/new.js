import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('product');
  },
  deactivate: function() {
    var model = this.get('controller.model');
    if (model.get('isNew'))
      model.deleteRecord();
  },
  actions: {
    save: function(product) {
      var controller = this.controllerFor('products/new');
      var selectedProduct = controller.get('selectedProduct');
      var selectedTag = controller.get('selectedTag');
      var session = this.get('session');
      var category = this.store.createRecord('category', {
        name: controller.get('selectedProduct.category')
      });

      product.setProperties({
        name: selectedProduct.get('name'),
        instagramTag: selectedTag.get('name'),
        user: session.get('currentUser')
      });

      category.save().then(category => {
        product.set('category', category);
        return product.save();
      }).then(product => {
        this.transitionTo('product.index', product);
      });
    }
  }
});
