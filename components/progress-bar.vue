<template>
  <div class="progress-bar fixed top-0 w-full">
    <div class="bar h-1 bg-green" :style="styleObj"></div>
  </div>
</template>

<script>
export default {
  computed: {
    width() {
      return (100 / this.$store.state.slides.length) * this.$route.params.slide
    },
    styleObj() {
      return { width: this.width + '%' }
    },
  },
}
</script>
<style scoped>
.progress-bar .bar {
  transition: width 300ms ease-in-out;
}
</style>
