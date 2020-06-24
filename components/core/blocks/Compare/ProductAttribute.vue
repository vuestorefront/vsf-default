<template>
  <span v-if="isCompareEnabled">{{ value | htmlDecode }}</span>
</template>

<script>
  import ProductAttribute from '../../ProductAttribute.vue'
  import { CompareStatus } from '@vue-storefront/core/modules/compare/components/CompareStatus'

  export default {
    mixins: [ProductAttribute, CompareStatus]
  }
</script>
