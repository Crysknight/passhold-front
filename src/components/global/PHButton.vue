<template>
  <div class="ph-button" @click="handleClick">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PHButton',
  props: {
    disabled: Boolean
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}
</script>

<style lang="scss">
.ph-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 15px;
  border: 3px solid #333333;
  text-transform: uppercase;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
}
</style>
