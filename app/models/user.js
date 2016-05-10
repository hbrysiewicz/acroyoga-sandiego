import Model from 'ember-data/model';
import DS from 'ember-data';

const {
  attr
} = DS;

export default Model.extend({
  accessibility: attr(),
  bio: attr('string'),
  cover: attr('string'),
  created_at: attr('date'),
  created_by: attr('date'),
  image: attr('string'),
  language: attr('string'),
  last_login: attr('date'),
  location: attr('string'),
  meta_description: attr('string'),
  meta_title: attr('string'),
  name: attr('string'),
  slug: attr('string'),
  status: attr('string'),
  tour: attr('string'),
  updated_at: attr('date'),
  updated_by: attr('date'),
  uuid: attr('string'),
  website: attr('string'),
});
