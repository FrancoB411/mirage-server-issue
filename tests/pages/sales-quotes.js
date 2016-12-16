import {
  clickable,
  create,
  visitable
} from 'ember-cli-page-object';

export default create({
  clickFirstSalesQuote: clickable('.sales-quotes a:first-child li:first-child'),
  visitSalesQuote: visitable('/sales-quote/:id'),
  visitSalesQuotes: visitable('/sales-quotes'),
});
