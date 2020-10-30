import Vue from 'vue'
import Vuex from 'vuex'
//1.挂载到vue上
Vue.use(Vuex)

//2.创建对象
const store =  new Vuex.Store({
  state: {
    showBottomBar:true,  //底部导航栏是否显示
  },
  mutations: {
    showBottomBar(state,payload){
      state.showBottomBar = payload
    }
  },
  actions: {

  },
  modules: {

  }
})

export default store
