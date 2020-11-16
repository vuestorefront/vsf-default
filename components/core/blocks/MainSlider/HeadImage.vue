<template>
  <section class="head-image w-100 bg-cl-th-accent cl-white">
    <div
      class="container w-100 h-100 cl-black"
      :style="{backgroundImage: `url('${currentImage.image[supportsWebp ? 'webp' : 'fallback']}')`}"
      v-if="currentImage"
    >
      <div class="head-image-content">
        <h1 class="title" data-testid="mainSliderTitle">
          {{ currentImage.title }}
        </h1>
        <p
          class="subtitle mb0 serif h3"
          data-testid="mainSliderSubtitle"
        >
          {{ currentImage.subtitle }}
        </p>
        <!-- <div class="align-center inline-flex">
          <button-outline :link="currentImage.link" color="light">
            {{ currentImage.button_text }}
          </button-outline>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { currentStoreView } from '@vue-storefront/core/lib/multistore'
import { mapGetters } from 'vuex'

const image = {
  webp: "/assets/full_width_banner.webp",
  fallback: "/assets/full_width_banner.jpg"
}

const headImage = {
  de: {
      title: "Neue Wege beschreiten.",
      subtitle: "Eine Mode kann sich zu einem neuen Stil durchsetzen und offenbart die neusten Kreationen von Designern, Technologen, Ingenieuren und Designmanagern.",
      link: "/women/frauen-20",
      image
  },
  it: {
      title: "Cammina la passeggiata.",
      subtitle: "Una moda può diventare lo stile prevalente nel comportamento o manifestare le ultime creazioni di designer, tecnologi, ingegneri e responsabili del design.",
      link: "/women/la-donne-20",
      image
  },
  default: {
        title: "Walk the walk.",
        subtitle: "A fashion can become the prevailing style in behaviour or manifest the newest creations of designers, technologists, engineers, and design managers.",
        link: "/women.html",
        image
  }
}

export default {
  computed: {
    currentImage () {
      const { storeCode } = currentStoreView()
      
      return headImage[storeCode] || headImage.default
    },
    supportsWebp () {
      return this.$store.state.ui.supportsWebp
    }
  }
}
</script>

<style lang="scss" scoped>
.head-image {
  display: none;
  @media (min-width: 767px) {
    display: inherit;
  }

  .head-image-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15%;

    .title {
      font-size: 3.4rem;
      margin-bottom: 0;
    }

    .subtitle {
      font-size: 0.8rem;
      max-width: 340px;
      font-family: 'Roboto', sans-serif;
      line-height: 1.2rem;
    }
  }
}

.head-image {
  height: 640px;
}
.container {
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
}
.row {
  height: 640px;
}
@media (max-width: 75em) {
  .head-image {
    height: 400px;
  }
  .title {
    font-size: 50px;
  }
  .subtitle {
    font-size: 20px;
  }
  .row {
    height: 400px;
  }
}
@media (max-width: 64em) {
  .head-image {
    height: 359px;
  }
  .container {
    background-position: left;
  }
  .title {
    font-size: 48px;
  }
  .subtitle {
    font-size: 18px;
  }
  .button {
    font-size: 16px;
  }
  .row {
    height: 359px;
  }
}
</style>
