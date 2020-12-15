<template>
  <div class="content" @click="$router.push('slides/1')">
    <h1 class="text-6xl">Welcome to my presentation!</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const slides = await $content('slides').fetch()
    return {
      slides,
    }
  },
}
</script>
