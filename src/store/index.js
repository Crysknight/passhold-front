import Vue from 'vue';
import Vuex from 'vuex';

import * as modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules
});

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

export default store;
