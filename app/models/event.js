import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  url: attr('string'),
  image: attr('string'),
  start: attr('date'),
  end: attr('date'),
  created: attr('date'),
  changed: attr('date'),
  capacity: attr('number'),
  status: attr('string'),
  currency: attr('string'),
  online_event: attr('boolean'),
});
