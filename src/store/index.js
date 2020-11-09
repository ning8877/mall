import Vue from 'vue'
import Vuex from 'vuex'
import {ADD_CART, ADD_COUNT} from './mutation-type'

//1.挂载到vue上
Vue.use(Vuex)

//2.创建对象
const store =  new Vuex.Store({
  state: {
    cartList:[],  //商品信息
  },
  getters:{
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    },
    totalPrice(state) {
      return state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) =>{
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    isSelectAll(state) {
      if (state.cartList.length === 0) return false
      return !state.cartList.find(item => !item.checked)
    }
  },
  mutations: {
    // 添加新商品
    [ADD_CART](state,payload){
      payload.count = 1
      payload.checked = false
      state.cartList.push(payload)
    },
    // 新商品已存在于购物车，添加数量
    [ADD_COUNT](state,payload){
      payload.count += 1
    },
    updateCheck(state,payload){
      let cartList = state.cartList
      state.cartList = null
      if(cartList){
        cartList.forEach(item =>{
          item.checked = payload
        })
      }
      state.cartList = cartList
    },

    updateSingle(state,payload){
      let cartList = state.cartList
      state.cartList = null
      let product = cartList.find(item => {
        return item.iid === payload.product.iid
      })
      if(product){
        product.checked = payload.status
      }
      state.cartList = cartList
    },
  },
  actions: {
    addToCart(context,payload){
      return new Promise((resolve,reject) =>{
        let product = context.state.cartList.find(item => {
          return item.iid === payload.iid
        })
        if(product){
          context.commit(ADD_COUNT,product)
          let cartList = context.state.cartList
          context.state.cartList = null
          context.state.cartList = cartList
          resolve('添加成功')
        }else{
          context.commit(ADD_CART,payload)
          resolve('添加成功')
        }
      })
    },
    // 购买按钮
    buyCart(context,payload) {
      return new Promise((resolve, reject) => {
        let product = context.state.cartList.find(item => item.iid === payload.iid)
        if (product) {
          context.commit(ADD_COUNT, product)
          resolve('该商品已在购物车中')
        } else {
          payload.count = 1
          context.commit(ADD_CART, payload)
          resolve('添加成功')
        }
      })
    }
  },
  modules: {
    
  }
})

export default store
