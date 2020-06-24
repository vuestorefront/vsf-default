<template>
  <button
    v-if="isCompareEnabled"
    class="brdr-none bg-cl-transparent p15"
    :aria-label="$t('Remove')"
    :title="$t('Remove')"
  >
    <i class="material-icons h4">close</i>
  </button>
</template>

<script>
  import { CompareStatus } from '@vue-storefront/core/modules/compare/components/CompareStatus'

  export default {
    mixins: [CompareStatus]
  }
</script>
