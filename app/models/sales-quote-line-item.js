import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  imageUrl: DS.attr('string'),
  salesQuote: DS.belongsTo(),
});
