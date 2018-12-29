import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import goods from './goods/index'
export default new Vuex.Store({
    modules: {
      goods
    }
});