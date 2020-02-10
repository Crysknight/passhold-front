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
.ph-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
