<template>
  <div class="content cursor-pointer">
    <h1 class="text-6xl" @click="$router.push('slides/1')">
      Table of contents
    </h1>
    <ol>
      <li v-for="slide in slides" :key="slide.pages">
        <nuxt-link :to="'/slides/' + slide.page">{{ slide.title }}</nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const slides = await $content('slides').sortBy('page').fetch()
    return {
      slides,
    }
  },
}
</script>
<style scoped>
ol li {
  @apply list-decimal;
  @apply py-2;
}
</style>
