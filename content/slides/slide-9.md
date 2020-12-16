---
page: 9
subtitle: SFC
title: Single File Components
---

- Like the code you already know

```js
<template>
  <div class="component">
    <h1>{{ title }}</h1>
    <h2>Couting: {{ counter }}</h2>
    <button @click="raise">Click me!</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    raise() {
      this.counter++
    },
  },
}
</script>

<style scoped>
h1 {
  font-weight: 600;
  font-size: 2rem;
}
h2 {
  font-size: 1.4rem;
}

button {
  background: none;
  border: 2px solid #0f0;
}
</style>

```
