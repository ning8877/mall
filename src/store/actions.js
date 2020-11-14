import {ADD_CART, ADD_COUNT,CHANGE_COUNT,DELETE_PRODUCT} from './mutation-type'

const actions = {
  // 添加进购物车
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
  },
  // 改变商品数量
  changeCount(context, payload){
    return new Promise((resolve, reject) => {
      let p = context.state.cartList.find(item => item.iid === payload.product.iid)
      if (p) {
        context.commit(CHANGE_COUNT, {product:p, count:payload.count})
        let cartList = context.state.cartList
        context.state.cartList = null
        context.state.cartList = cartList
        resolve('success')
      } 
    })
  },
  // 删除商品
  deleteProduct(context,iid){
    return new Promise((resolve,reject) => {
      let index = context.state.cartList.findIndex(item => item.iid === iid)
      context.commit(DELETE_PRODUCT,index)
      resolve('success')
    })
  }
}

export default actions