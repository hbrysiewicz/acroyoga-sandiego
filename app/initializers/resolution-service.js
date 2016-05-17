import Resolution from '../services/resolution';

export function initialize(app) {
  app.register('resolution:main', Resolution, { singleton: true });
  app.inject('component', 'Resolution', 'service:resolution');
  app.inject('controller', 'Resolution', 'service:resolution');
}

export default {
  name: 'resolution-service',
  initialize
};
