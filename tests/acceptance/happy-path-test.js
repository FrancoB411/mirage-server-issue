import { test } from 'qunit';
import  page  from 'mirage-issue/tests/pages/sales-quotes'
import moduleForAcceptance from 'mirage-issue/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | happy path');

test('visiting /sales-quote/1 from the /sales-quotes route, no problem', function(assert) {
  server.createList('sales-quote', 10);
  page.visitSalesQuotes();

  andThen(function() {
    assert.equal(currentRouteName(), 'sales-quotes');
  });

  page.clickFirstSalesQuote();

  andThen(() => {
    assert.equal(currentRouteName(), 'sales-quote');
    assert.equal(currentURL(), '/sales-quote/1');

    // loads sales quote data no problem 
    assert.ok(page.salesQuoteId, "1");
  });
});

// PROBLEM:
// This case causes the behavior in question. 
test('visiting sales-quote/1 directly? Problem', function(assert) {
  visit('/sales-quote/1');

  // 404 and element not found.
  // Open dev tools to see the mirage "there was no route defined to handle this request." error
  // Take off namespace in adapters/application and mirage/config and it still fails in test mode, but the browser works. 
  andThen(function() {
    assert.ok(page.salesQuoteId, "1");
  });
});
