import DS from 'ember-data';

export default DS.Model.extend({
  firstAttr: DS.attr('string'),
  secondAttr: DS.attr('string'),
  salesQuoteLineItems: DS.hasMany()
});
