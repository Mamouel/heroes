import Vue from 'vue';
import Vuex from 'vuex';
import { heroesStore } from './modules/heroes';

Vue.use(Vuex);

// Disable strict mode for production
export default new Vuex.Store({
  strict: true,
  modules: {
    heroesStore,
  },
});
