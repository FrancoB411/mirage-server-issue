import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sales-quote', 'Unit | Model | sales quote', {
  needs: ['model:sales-quote-line-item']
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
