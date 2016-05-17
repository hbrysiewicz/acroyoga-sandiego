import Ember from 'ember';

const {
  Service,
  $,
  computed: { or, not },
  run: { debounce }
} = Ember;

export default Service.extend({
    desktopBreakpoint: 800,
    tabletBreakpoint: 600,

    isDesktop: false,
    isTablet: false,
    isMobile: true,

    isMini: or('isTablet', 'isMobile'),
    isLarge: not('isMini'),

    init() {
      this._super(...arguments);
      this._environmentCheck();
      $(window).resize(() => {
          debounce(this, this._environmentCheck, 1000);
      });
    },

    _environmentCheck: function(){
        var desktopSize = this.get('desktopBreakpoint');
        var tabletSize = this.get('tabletBreakpoint');
        if (window.matchMedia(`(min-width: ${desktopSize}px`).matches) {
          this.set('isDesktop', true);
          this.set('isTablet', false);
          this.set('isMobile', false);
        } else if (window.matchMedia(`(min-width: ${tabletSize}px) and (max-width: ${desktopSize}px)`).matches) {
          this.set('isDesktop', false);
          this.set('isTablet', true);
          this.set('isMobile', false);
        } else {
          this.set('isDesktop', false);
          this.set('isTablet', false);
          this.set('isMobile', true);
        }
    }
});