import Vue from 'vue'
import Vuex from 'vuex'
import book from './books/index'
Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    modules: {
      book
    }
  })
  
  return store
}
