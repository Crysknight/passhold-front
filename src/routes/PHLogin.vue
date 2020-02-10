<template>
  <div class="ph-login">
    <div class="ph-login__buttons">
      <PHButton @click="login(AUTH_SOURCES.GOOGLE)">Google</PHButton>
      <PHButton @click="login(AUTH_SOURCES.LINKEDIN)">LinkedIn</PHButton>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { GENERAL } from '@/constants';

export default {
  name: 'PHLogin',
  constants: {
    AUTH_SOURCES: GENERAL.AUTH_SOURCES
  },
  methods: {
    ...mapActions('profile', ['login'])
  }
}
</script>

<style lang="scss">
.ph-login {
  padding-top: 70px;

  &__buttons {
    .ph-button {
      margin: 0 15px;
    }
  }
}
</style>
