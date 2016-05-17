import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  subtitle: attr('string'),
  body: attr('string'),
  created: attr('date'),
  updated: attr('date'),
});
