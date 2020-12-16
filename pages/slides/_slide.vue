<template>
  <div class="relative">
    <template v-if="slide">
      <div :key="slide.slug">
        <h2 class="text-green text-lg">{{ slide.subtitle }}</h2>
        <h1>{{ slide.title }}</h1>
        <nuxt-content ref="doc" :document="slide" class="content prose" />
      </div>
      <div class="footnote mt-4">
        <h4>{{ slide.footnote }}</h4>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) return 'slide-right'
    if (!from.params.slide || !to.params.slide) return 'fade'
    return +to.params.slide < +from.params.slide ? 'slide-left' : 'slide-right'
  },
  async asyncData({ $content, route, store }) {
    const slug = 'slide-' + route.params.slide
    const slides = await $content('slides').sortBy('page').fetch()
    const slide = await $content('slides', slug).fetch()
    const siblings = await $content('slides')
      .sortBy('page')
      .surround(slide.slug)
      .fetch()
    store.commit('setSlides', slides)
    store.commit('setSiblings', siblings)
    return { slides, slide, siblings }
  },
  data() {
    return {
      count: 0,
    }
  },
  mounted() {
    const element = this.$refs.doc.$el.querySelectorAll('li')
    this.count = element.length
  },
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-right-enter,
.slide-right-leave-to {
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(-10vw);
}

.slide-right-enter {
  transform: translateX(10vw);
}
.slide-left-enter,
.slide-left-leave-to {
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(10vw);
}

.slide-left-enter {
  transform: translateX(-10vw);
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
}
</style>
