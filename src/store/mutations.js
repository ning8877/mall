import {ADD_CART, ADD_COUNT,CHANGE_COUNT,DELETE_PRODUCT} from './mutation-type'

const mutations = {
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
  // 改变商品数量
  [CHANGE_COUNT](state,payload){
    payload.product.count = payload.count
  }, 
  // 删除商品
  [DELETE_PRODUCT](state,index){
    state.cartList.splice(index,1)
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
}

export default mutations