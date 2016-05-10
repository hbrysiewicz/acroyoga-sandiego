import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  uuid: attr('string'),
  title: attr('string'),
  slug: attr('string'),
  markdown: attr('string'),
  image: attr('string')
});
