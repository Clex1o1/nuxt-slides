<template>
  <main class="bg-black">
    <progress-bar />
    <div
      class="container mx-auto flex justify-center items-center min-h-screen"
    >
      <nuxt />
    </div>
    <slide-navigation
      v-if="siblings.length"
      class="fixed bottom-0 right-0 mr-3"
      :navigation-items="[prev, next]"
      @slide-left="slideLeft"
      @slide-right="slideRight"
    />
    <img
      class="fixed logo bottom-0"
      src="@/assets/icons/westwerk-bildmarke.svg"
      alt="Logo"
    />
  </main>
</template>
<script>
export default {
  computed: {
    siblings() {
      return this.$store.state.siblings
    },
    slides() {
      return this.$store.state.slides
    },

    next() {
      return (
        this.slides.findIndex((item) => item.slug === this.siblings[1]?.slug) +
        1
      )
    },
    prev() {
      return (
        this.slides.findIndex((item) => item.slug === this.siblings[0]?.slug) +
        1
      )
    },
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
      if (this.siblings[1]) {
        this.$router.push({
          params: { slide: this.next },
        })
      }
    },
    slideLeft() {
      if (this.siblings[0]) {
        this.$router.push({
          params: { slide: this.prev },
        })
      }
    },
  },
}
</script>
<style>
.logo {
  transform: translate(-25%, 40%);
}
</style>
