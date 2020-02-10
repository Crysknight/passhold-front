import Vue from 'vue';
import VueConstants from 'vue-constants';

import PHApp from './PHApp';
import store from './store';
import router from './router';
import * as global from '@/components/global';

Vue.config.productionTip = false;
Vue.use(VueConstants);

Object.keys(global).forEach(componentName => {
  Vue.component(componentName, global[componentName]);
});

new Vue({
  render: h => h(PHApp),
  store,
  router
}).$mount('#app');
