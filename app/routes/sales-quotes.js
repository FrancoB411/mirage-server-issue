import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('salesQuote', {include: 'sales-quote-line-items'});
  },
});
