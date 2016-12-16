import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v2',
  headers: {
    "Content-Type": 'application/vnd.api+json',
  }
});
