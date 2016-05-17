import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title() { return faker.lorem.words(); },
  subtitle() { return faker.lorem.sentences(); },
  body() { return faker.lorem.paragraphs(); },
  created() { return faker.date.past(); },
  updated() { return faker.date.past(); },
  image() { return faker.image.image(); }
});
