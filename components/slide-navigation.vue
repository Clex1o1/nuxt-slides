<template>
  <div class="slide-navigation">
    <div class="arrwos flex">
      <nuxt-link
        v-if="navigationItems[0]"
        :to="`${navigationItems[0]}`"
        class="mx-2"
      >
        <arrow :direction="'left'" @slide-left="$emit('slide-left')" />
      </nuxt-link>
      <nuxt-link v-if="navigationItems[1]" :to="`${navigationItems[1]}`">
        <arrow :direction="'right'" @slide-right="$emit('slide-right')" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navigationItems: {
      default() {
        return []
      },
      validator(value) {
        return value.length === 2
      },
      type: Array,
    },
  },
}
</script>
