<template>
  <div
    class="arrow cursor-pointer w-8 h-8"
    @click="$emit(`slide-${direction}`)"
  >
    <img
      class="icon"
      :class="direction"
      src="@/assets/icons/arrow.svg"
      alt="Logo"
    />
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
<style scoped>
.icon.right {
  transform: rotate(180deg);
}
</style>
