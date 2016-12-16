import { test } from 'qunit';
import  page  from 'partner/tests/pages/sales-quotes'
import moduleForAcceptance from 'partner/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | happy path');

test('visiting /happy-path', function(assert) {
  server.createList('sales-quote', 10);
  page.visitSalesQuotes();

  andThen(function() {
    assert.equal(currentRouteName(), 'sales-quotes');
    percySnapshot('sales-quotes');
  });

  page.clickFirstSalesQuote();

  andThen(() => {
    assert.equal(currentRouteName(), 'sales-quote');
    assert.equal(currentURL(), '/sales-quote/1');
    percySnapshot('sales-quote');
  });
});
