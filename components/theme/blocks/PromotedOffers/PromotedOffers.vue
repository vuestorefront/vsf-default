<template>
  <section v-if="!singleBanner" class="offers container my30 px15 cl-black">
    <div class="row">
      <div
        class="offer-container offer-container--main col-xs-12 col-sm-6 pb15"
        v-for="(banner, index) in banners.mainBanners"
        :key="index"
      >
        <router-link :to="localizedRoute(banner.link)">
          <div
            class="offer offer--main"
            :style="{backgroundImage: `url('${banner.image[supportsWebp ? 'webp' : 'fallback']}')`}"
          >
            <h2 class="title m0 h1">
              {{ banner.title }}
            </h2>
            <p class="subtitle m0 serif h3 uppercase">
              {{ banner.subtitle }}
            </p>
          </div>
        </router-link>
      </div>

      <div class="col-xs-12 col-sm-6">
        <div
          class="offer-container pb15"
          v-for="(banner, index) in banners.smallBanners"
          :key="index"
        >
          <lazy-hydrate when-visible>
            <router-link :to="localizedRoute(banner.link)">
              <div
                class="offer offer-small border-box p5 flex bg-cl-th-accent"
                v-lazy:background-image="banner.image[supportsWebp ? 'webp' : 'fallback']"
              >
                <h2 class="title m0 h1">
                  {{ banner.title }}
                </h2>
                <p class="subtitle m0 serif h3 uppercase">
                  {{ banner.subtitle }}
                </p>
              </div>
            </router-link>
          </lazy-hydrate>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="container my30 px15">
    <div class="row">
      <div
        class="col-xs-12"
        v-for="(banner, index) in banners.productBanners"
        :key="index"
      >
        <lazy-hydrate when-visible>
          <router-link :to="localizedRoute(banner.link)">
            <div
              class="offer offer-product border-box p5 flex bg-cl-th-accent"
              v-lazy:background-image="banner.image[supportsWebp ? 'webp' : 'fallback']"
            >
              <h2 class="title m0 h1">
                {{ banner.title }}
              </h2>
              <p class="subtitle m0 serif h3 uppercase">
                {{ banner.subtitle }}
              </p>
            </div>
          </router-link>
        </lazy-hydrate>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'PromotedOffers',
  props: {
    singleBanner: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    LazyHydrate
  },
  computed: {
    ...mapGetters({
      banners: 'promoted/getPromotedOffers'
    }),
    supportsWebp () {
      return this.$store.state.ui.supportsWebp
    }
  },
  async created () {
    await this.updatePromotedOffers()
  },
  methods: {
    ...mapActions({
      updatePromotedOffers: 'promoted/updatePromotedOffers'
    })
  }
}
</script>

<style lang="scss" scoped>
  .offer-container {
    &:last-child {
      padding-bottom: 0;
    }
    &--main {
      @media (max-width: 576px) {
        height: calc(100vh - 84px);
      }
    }
  }
  .offer {
    height: 735px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;
    transition: 0.3s all;

    @media (max-width: 767px) {
      height: 200px;
    }

    &--main {
      @media (max-width: 575px) {
        height: 100%;
      }
    }

    &:hover {
      opacity: 0.9;
    }

    .title {
      text-align: center;
      margin-top: 2rem;
      @media (max-width: 767px) {
        background-color: rgba(255,255,255,0.4);
        padding: 0.5rem;
        line-height: 2.4rem;
      }
    }

    .subtitle {
      font-family: 'Roboto', sans-serif;
      @media (max-width: 767px) {
        background-color: rgba(255,255,255,0.4);
        padding: 0.5rem;
      }
    }
  }
  .offer-small {
    height: 360px;

    @media (max-width: 767px) {
      height: 200px;
    }
  }
  .offer-product {
    height: 330px;
    background-position: 50% 20%;
  }
  .title {
    @media (max-width: 767px) {
      font-size: 36px;
    }
  }
  .subtitle {
    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
</style>
