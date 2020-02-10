import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

import {
  PHLogin,
  PHPasswords
} from '@/routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'app',
    component: PHPasswords
  },
  {
    path: '/login',
    name: 'login',
    component: PHLogin
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, _from, next) => {
  if (!store.getters['profile/isLoggedIn'] && to.name !== 'login') {
    next('login');
  } else {
    next();
  }
});

export default router;
