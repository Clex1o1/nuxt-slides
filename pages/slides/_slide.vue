<template>
  <div class="slide absolute">
    <template v-if="slide">
      <transition :name="`slide-${direction}`" mode="out-in">
        <div :key="slide.slug">
          {{ slide.title }}
          <nuxt-content :document="slide" />
        </div>
      </transition>
    </template>
    <slide-navigation
      class="fixed bottom-0 right-0 mr-3"
      :navigation-items="siblings"
      @slide-left="slideLeft"
      @slide-right="slideRight"
    />
  </div>
</template>

<script>
export default {
  transition: 'slide-right',
  async asyncData({ $content, route }) {
    const slides = await $content('slides').sortBy('slug').fetch()
    const slide = await $content('slides', route.params.slide).fetch()
    const siblings = await $content('slides')
      .sortBy('slug')
      .surround(slide.slug)
      .fetch()
    return { slides, slide, siblings }
  },
  data() {
    return {
      id: this.$route.params.slide,
    }
  },
  mounted() {
    window.addEventListener('keyup', this.keyup)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyup)
  },
  methods: {
    keyup({ key }) {
      if (key === 'ArrowLeft') this.slideLeft()
      if (key === 'ArrowRight') this.slideRight()
      if (key === 'ArrowRown') this.slideDown()
      if (key === 'ArrowUP') this.slideUp()
    },
    slideRight() {
      this.transition = 'slide-right'
      this.activeSlide =
        this.activeSlide++ >= this.slides.length - 1
          ? this.slides.length - 1
          : this.activeSlide++
    },
    slideLeft() {
      this.transition = 'slide-left'
      this.activeSlide = this.activeSlide-- <= 0 ? 0 : this.activeSlide--
    },
  },
}
</script>
<style scoped>
.slide-right-enter,
.slide-right-leave-to {
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter {
  transform: translateX(100%);
}
.slide-left-enter,
.slide-left-leave-to {
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(100%);
}

.slide-left-enter {
  transform: translateX(-100%);
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
}
</style>
