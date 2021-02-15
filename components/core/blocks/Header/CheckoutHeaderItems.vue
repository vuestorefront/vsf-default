<template>
  <div
    class="row between-xs middle-xs px15 py5"
  >
    <div class="col-xs-5 col-md-3 middle-xs">
      <div>
        <router-link :to="localizedRoute('/')" class="cl-tertiary links">
          {{ $t("Return to shopping") }}
        </router-link>
      </div>
    </div>
    <div class="col-xs-2 col-md-6 center-xs">
      <logo width="auto" height="41px" />
    </div>
    <div class="col-xs-5 col-md-3 end-xs">
      <div>
        <a
          v-if="!currentUser"
          href="#"
          @click.prevent="gotoAccount"
          class="cl-tertiary links"
          >{{ $t("Login to your account") }}</a
        >
        <span v-else>{{
          $t("You are logged in as {firstname}", currentUser)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Logo from 'theme/components/core/Logo'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapState({
      currentUser: state => state.user.current,
    })
  },
  methods: {
    gotoAccount () {
      this.$bus.$emit('modal-toggle', 'modal-signup')
    }
  }
};
</script>