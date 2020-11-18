<template>
  <div class="header">
    <header
      class="fixed w-100 brdr-bottom-1 bg-cl-primary brdr-cl-secondary"
      :class="{ 'is-visible': navVisible }"
    >
      <div class="container px15">
        <CommonHeaderItems v-if="!isCheckoutPage || isThankYouPage" />
        <CheckoutHeaderItems v-if="isCheckoutPage && !isThankYouPage" />
      </div>
    </header>
    <div class="header-placeholder" />
  </div>
</template>

<script>
import CurrentPage from 'theme/mixins/currentPage'

export default {
  name: 'Header',
  components: {
    CommonHeaderItems: () => import('theme/components/core/blocks/Header/CommonHeaderItems'),
    CheckoutHeaderItems: () => import('theme/components/core/blocks/Header/CheckoutHeaderItems')
  },
  mixins: [CurrentPage],
  data () {
    return {
      navVisible: true,
      isScrolling: false,
      scrollTop: 0,
      lastScrollTop: 0,
      navbarHeight: 54
    }
  },
  computed: {   
    isThankYouPage () {
      return this.$store.state.checkout.isThankYouPage
    }
  },
  beforeMount () {
    window.addEventListener(
      'scroll',
      () => {
        this.isScrolling = true
      },
      { passive: true }
    )

    setInterval(() => {
      if (this.isScrolling) {
        this.hasScrolled()
        this.isScrolling = false
      }
    }, 250)
  },
  methods: {
    hasScrolled () {
      this.scrollTop = window.scrollY
      if (
        this.scrollTop > this.lastScrollTop &&
        this.scrollTop > this.navbarHeight
      ) {
        this.navVisible = false
      } else {
        this.navVisible = true
      }
      this.lastScrollTop = this.scrollTop
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-icon-hover: color(secondary, $colors-background);

header {
  height: 54px;
  top: -55px;
  z-index: 3;
  transition: top 0.2s ease-in-out;
  &.is-visible {
    top: 0;
  }
}
.icon {
  opacity: 0.6;
  &:hover,
  &:focus {
    background-color: $color-icon-hover;
    opacity: 1;
  }
}
.right-icons {
  //for edge
  float: right;
}
.header-placeholder {
  height: 54px;
}
.links {
  text-decoration: underline;
}
@media (max-width: 767px) {
  .row.middle-xs {
    margin: 0 -15px;

    &.py5 {
      margin: 0;
    }
  }
  .col-xs-2:first-of-type {
    padding-left: 0;
  }
  .col-xs-2:last-of-type {
    padding-right: 0;
  }
  a,
  span {
    font-size: 12px;
  }
}
</style>
