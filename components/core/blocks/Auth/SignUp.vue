<template>
  <modal name="modal-signup" :width="620">
    <login v-if="activeElem === 'login'" />
    <register v-if="activeElem === 'register'" />
    <forgot-pass v-if="activeElem === 'forgot-pass'" />
  </modal>
</template>

<script>
import { mapState } from 'vuex'
import Modal from 'theme/components/core/Modal'

export default {
  name: 'SignUp',
  computed: {
    ...mapState({
      activeElem: state => state.ui.authElem
    })
  },
  components: {
    Modal,
    Login: () => import('theme/components/core/blocks/Auth/Login'),
    Register: () => import('theme/components/core/blocks/Auth/Register'),
    ForgotPass: () => import('theme/components/core/blocks/Auth/ForgotPass')
  }
}
</script>

<style scoped>
  .modal {
    font-size: 18px;
  }
</style>
