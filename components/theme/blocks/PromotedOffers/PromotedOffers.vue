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
            :class="{'webp': supportsWebp}"
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
                :class="{
                  'webp': supportsWebp, 
                  'offer-shine-on': index === 0,
                  'offer-spring': index === 1
                  }"
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
              class="offer offer-spring offer-product border-box p5 flex bg-cl-th-accent"
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
import { currentStoreView } from '@vue-storefront/core/lib/multistore'

const offers = {
  de: {
    "mainBanners": [
      {
        "title": "Lässige Büro",
        "subtitle": "Kollektion",
        "link": "/women/frauen-20"
      }
    ],
    "smallBanners": [
      {
        "title": "Glänzen Sie mit",
        "subtitle": "Accessoires",
        "link": "/men/herren-11"
      },
      {
        "title": "Der Frühling kommt",
        "subtitle": "Hüte",
        "link": "/gear/gerat-3"
      }
    ],
    "productBanners": [
      {
        "title": "Der Frühling kommt",
        "subtitle": "Hüte",
        "link": "/gear/gerat-3"
      }
    ]
  },
  it: {
    "mainBanners": [
      {
        "title": "Ufficio casual",
        "subtitle": "Collezione",
        "link": "/women/la-donne-20"
      }
    ],
    "smallBanners": [
      {
        "title": "Brilla",
        "subtitle": "Accessori",
        "link": "/men/signori-11"
      },
      {
        "title": "La primavera sta arrivando",
        "subtitle": "Cappelli",
        "link": "/gear/equipaggiamento-3"
      }
    ],
    "productBanners": [
      {
        "title": "La primavera sta arrivando",
        "subtitle": "Cappelli",
        "link": "/gear/equipaggiamento-3"
      }
    ]
  },
  default: {
    "mainBanners": [
      {
        "title": "Office casual",
        "subtitle": "Collection",
        "link": "/women.html"
      }
    ],
    "smallBanners": [
      {
        "title": "Shine on",
        "subtitle": "Accessories",
        "link": "/men.html"
      },
      {
        "title": "Spring is coming",
        "subtitle": "Hats",
        "link": "/gear.html"
      }
    ],
    "productBanners": [
      {
        "title": "Spring is coming",
        "subtitle": "Hats",
        "link": "/gear.html"
      }
    ]
  }
}

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
    banners () {
      const { storeCode } = currentStoreView()
      
      return offers[storeCode] || offers.default
    },
    supportsWebp () {
      return this.$store.state.ui.supportsWebp
    }
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
        background-image: url('/assets/ban1-320.jpg');
          @media (min-width: 375px) {
            background-image: url('/assets/ban1-520.jpg');
          }

          @media (min-width: 576px) {
            background-image: url('/assets/ban1-320.jpg');
          }

          @media (min-width: 768px) {
            background-image: url('/assets/ban1-460.jpg');
          }

          @media (min-width: 1200px) {
            background-image: url('/assets/ban1.jpg');
          }

        &.webp {
          background-image: url('/assets/ban1-320.webp');
          @media (min-width: 375px) {
            background-image: url('/assets/ban1-520.webp');
          }

          @media (min-width: 576px) {
            background-image: url('/assets/ban1-320.webp');
          }

          @media (min-width: 768px) {
            background-image: url('/assets/ban1-460.webp');
          }

          @media (min-width: 1200px) {
            background-image: url('/assets/ban1.webp');
          }
        }
        @media (max-width: 575px) {
          height: 100%;
        }
    }

    &-shine-on {
        background-image: url('/assets/ban2-320.jpg');
          @media (min-width: 375px) {
            background-image: url('/assets/ban2-520.jpg');
          }

          @media (min-width: 576px) {
            background-image: url('/assets/ban2-320.jpg');
          }

          @media (min-width: 768px) {
            background-image: url('/assets/ban2-460.jpg');
          }

          @media (min-width: 1200px) {
            background-image: url('/assets/ban2.jpg');
          }

        &.webp {
          background-image: url('/assets/ban2-320.webp');
          @media (min-width: 375px) {
            background-image: url('/assets/ban2-520.webp');
          }

          @media (min-width: 576px) {
            background-image: url('/assets/ban2-320.webp');
          }

          @media (min-width: 768px) {
            background-image: url('/assets/ban2-460.webp');
          }

          @media (min-width: 1200px) {
            background-image: url('/assets/ban2.webp');
          }
        }
        @media (max-width: 575px) {
          height: 100%;
        }
    }

    &-spring {
        background-image: url('/assets/ban3-320.jpg');
          @media (min-width: 375px) {
            background-image: url('/assets/ban3-520.jpg');
          }

          @media (min-width: 576px) {
            background-image: url('/assets/ban3-320.jpg');
          }

          @media (min-width: 768px) {
            background-image: url('/assets/ban3-460.jpg');
          }

          @media (min-width: 1200px) {
            background-image: url('/assets/ban3.jpg');
          }

        &.webp {
          background-image: url('/assets/ban3-320.webp');
          @media (min-width: 375px) {
            background-image: url('/assets/ban3-520.webp');
          }

          @media (min-width: 576px) {
            background-image: url('/assets/ban3-320.webp');
          }

          @media (min-width: 768px) {
            background-image: url('/assets/ban3-460.webp');
          }

          @media (min-width: 1200px) {
            background-image: url('/assets/ban3.webp');
          }
        }
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
