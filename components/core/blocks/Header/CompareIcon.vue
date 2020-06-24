<template>
  <router-link
    :to="localizedRoute('/compare')"
    class="compare-icon no-underline inline-flex"
    v-if="isCompareEnabled && isActive"
    data-testid="compare-list-icon"
  >
    <i class="material-icons">compare</i>
    <span
      class="compare-count absolute flex center-xs middle-xs border-box py0 px2 h6 lh16 weight-700 cl-white bg-cl-silver"
      v-cloak
      v-show="getCompareProductsCount"
    >
      {{ getCompareProductsCount }}
    </span>
  </router-link>
</template>

<script>
  import CompareIcon from '@vue-storefront/core/compatibility/components/blocks/Header/CompareIcon'
  import { CompareStatus } from '@vue-storefront/core/modules/compare/components/CompareStatus'
  import { mapGetters } from 'vuex'

  export default {
    mixins: [CompareIcon, CompareStatus],
    computed: {
      ...mapGetters('compare', ['getCompareProductsCount'])
    }
  }
</script>

<style scoped>
  .compare-count {
    top: 7px;
    left: 50%;
    min-width: 16px;
    min-height: 16px;
    border-radius: 10px;
  }
</style>
