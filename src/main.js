import Vue from 'vue';

import PHApp from './PHApp';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  render: h => h(PHApp),
  store,
  router
}).$mount('#app');
