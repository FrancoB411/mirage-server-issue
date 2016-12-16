import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sales-quote-line-item', 'Unit | Model | sales quote line item', {
  needs: ['model:sales-quote']
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
