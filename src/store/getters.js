const getters = {
  // 购物车-商品数量
  cartLength(state) {
    return state.cartList.length
  },
  // 购物车-商品列表
  cartList(state) {
    return state.cartList
  },
  // 购物车-商品价格
  totalPrice(state) {
    return state.cartList.filter(item => {
      return item.checked
    }).reduce((preValue, item) =>{
      return preValue + item.price * item.count
    },0).toFixed(2)
  },
  //购物车-全选
  isSelectAll(state) {
    if (state.cartList.length === 0) return false
    return !state.cartList.find(item => !item.checked)
  }
}

export default getters