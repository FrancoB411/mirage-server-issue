import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('sales-quote-line-item', params.id);
  }
});
