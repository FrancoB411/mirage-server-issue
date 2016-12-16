import {
  clickable,
  create,
  text,
  visitable
} from 'ember-cli-page-object';

export default create({
  clickFirstSalesQuote: clickable('.sales-quotes a:first-child li:first-child'),
  salesQuoteId: text('.model-id'),
  visitSalesQuote: visitable('/sales-quote/:id'),
  visitSalesQuotes: visitable('/sales-quotes'),
});
