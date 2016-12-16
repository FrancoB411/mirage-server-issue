import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sales-quotes');
  this.route('sales-quote', { path: 'sales-quote/:id' });
  this.route('sales-quote-line-item', { path: 'sales-quote-line-item/:id' });
});

export default Router;
