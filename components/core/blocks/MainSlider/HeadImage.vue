<template functional>
  <section class="head-image w-100 bg-cl-th-accent cl-white">
    <div
      class="head-image__container container w-100 h-100 cl-black"
      :class="{'webp': props.supportsWebp}"
      v-if="props.currentImage"
    >
      <div class="head-image-content">
        <h1 class="title" data-testid="mainSliderTitle">
          {{ props.currentImage.title }}
        </h1>
        <p
          class="subtitle mb0 serif h3"
          data-testid="mainSliderSubtitle"
        >
          {{ props.currentImage.subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    currentImage: {
      type: Object,
      required: true
    },
    supportsWebp: {
      type: Boolean,
      required: true
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

  &__container {
    background-image: url('/assets/full_width_banner-800.jpg');
    @media (min-width: 850px) {
      background-image: url('/assets/full_width_banner-1000.jpg');
    }
    @media (min-width: 1050px) {
      background-image: url('/assets/full_width_banner-1200.jpg');
    }
    @media (min-width: 1250px) {
      background-image: url('/assets/full_width_banner-1400.jpg');
    }
    @media (min-width: 1450px) {
      background-image: url('/assets/full_width_banner-1600.jpg');
    }
    @media (min-width: 1650px) {
      background-image: url('/assets/full_width_banner-1800.jpg');
    }
    @media (min-width: 1850px) {
      background-image: url('/assets/full_width_banner.jpg');
    }

    &.webp {
      background-image: url('/assets/full_width_banner-800.webp');
      @media (min-width: 850px) {
        background-image: url('/assets/full_width_banner-1000.webp');
      }
      @media (min-width: 1050px) {
        background-image: url('/assets/full_width_banner-1200.webp');
      }
      @media (min-width: 1250px) {
        background-image: url('/assets/full_width_banner-1400.webp');
      }
      @media (min-width: 1450px) {
        background-image: url('/assets/full_width_banner-1600.webp');
      }
      @media (min-width: 1650px) {
        background-image: url('/assets/full_width_banner-1800.webp');
      }
      @media (min-width: 1850px) {
        background-image: url('/assets/full_width_banner.webp');
      }
    }
  }
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
