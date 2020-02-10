<template>
  <div class="ph-header">
    <div v-if="isLoggedIn" class="ph-header__profile">
      <img class="ph-header__profile-image" :src="avatar" />
      <div class="ph-header__profile-name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'PHHeader',
  computed: {
    ...mapState('profile', ['avatar']),
    ...mapGetters('profile', ['isLoggedIn', 'name'])
  }
}
</script>

<style lang="scss">
.ph-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 15px;
  background-color: #fa8070;
  font-family: bold;
  color: white;

  &__profile-image {
    width: 50px;
    height: 50px;
  }
}
</style>
