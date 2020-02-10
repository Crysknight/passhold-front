<template>
  <div class="ph-app">
    <PHHeader />
    <router-view />
  </div>
</template>

<script>
import { PHHeader } from '@/components';

export default {
  name: 'PHApp',
  components: {
    PHHeader
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;

  * {
    box-sizing: border-box;
  }
}

.ph-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
