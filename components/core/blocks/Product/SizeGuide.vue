<template>
  <modal name="modal-sizeguide" :width="620">
    <div slot="header">
      Size Guide
    </div>
    <div slot="content">
      <SizeGuideContent />
    </div>
  </modal>
</template>

<script>
import { mapState } from 'vuex'
import Modal from 'theme/components/core/Modal'
import SizeGuideContent from 'theme/components/theme/blocks/Static/Example'

export default {
  name: 'SizeGuide',
  components: {
    Modal,
    SizeGuideContent
  }
}
</script>

<style scoped>
    .modal {
        font-size: 18px;
    }
    .modal-content {
        max-height: 80%;
    }
</style>
