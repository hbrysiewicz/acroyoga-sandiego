import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  isShowing: false,

  showMini: computed.and('isMini', 'isShowing'),
  showLarge: computed.and('isLarge', 'isShowing'),

  isLarge: computed.not('isMini'),

  isMini: computed(function() {
    if (window.innerWidth <= 800) {
       return true;
     } else {
       return false;
     }
  }),

  actions: {
    toggle() {
      this.toggleProperty('isShowing');
    }
  }
});
