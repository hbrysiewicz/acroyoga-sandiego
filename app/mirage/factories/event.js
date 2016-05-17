import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name() { return faker.lorem.words(); },
  description() { return faker.lorem.sentences(); },
  url() { return faker.internet.url(); },
  image() { return faker.image.image(); },
  start() { return faker.date.future(); },
  end() { return faker.date.future(); },
  created() { return faker.date.past(); },
  changed() { return faker.date.past(); },
  capacity() { return faker.random.number(); },
  status() { return faker.random.arrayElement(['live', 'canceled', 'started', 'ended', 'completed']); },
  currency: 'usd',
  online_event: false
});
