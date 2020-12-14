<template>
  <div class="arrow" @click="$emit(`slide-${direction}`)">
    <span class="icon text-6xl cursor-pointer">{{ icon }}</span>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      default: 'right',
      type: String,
      validator(value) {
        return ['right', 'left'].includes(value)
      },
    },
  },
  computed: {
    icon() {
      return this.direction === 'right' ? '>' : '<'
    },
  },
}
</script>
