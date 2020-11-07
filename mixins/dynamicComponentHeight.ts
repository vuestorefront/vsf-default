import { isServer } from '@vue-storefront/core/helpers';

export default {
  data () {
    return {
      dynamicComponentHeight: 0
    }
  },
  beforeMount () {
    if (!isServer && window.innerWidth < 980) {
      const onResize = () => {
        this.dynamicComponentHeight = window.innerHeight;
      };
      window.addEventListener('resize', onResize)
      this.$on('hook:beforeDestroy', () => window.removeEventListener('resize', onResize))
    }
  }
}
