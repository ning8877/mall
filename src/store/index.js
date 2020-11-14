import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state:{
    cartList:[], //商品列表
  },
  getters,
  mutations,
  actions
})

export default store
