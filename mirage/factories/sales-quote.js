import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  "first-attr": "some attr",
  "second-attr": "some other attr",
  afterCreate(salesQuote, server) {
    server.create('sales-quote-line-item', { salesQuote });
  }
});
