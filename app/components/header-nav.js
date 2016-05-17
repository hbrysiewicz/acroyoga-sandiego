import Ember from 'ember';

const {
  Component,
  computed,
  inject: { service }
} = Ember;

export default Component.extend({
  resolution: service(),

  isShowing: false,

  showMini: computed.and('resolution.isMini', 'isShowing'),
  showLarge: computed.and('resolution.isLarge'),

  actions: {
    toggle() {
      this.toggleProperty('isShowing');
    }
  }
});
