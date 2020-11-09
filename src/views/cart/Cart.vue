<template>
  <div id="cart">
     <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <scroll class="cart-content" ref = "cart_scroll">
      <cart-list></cart-list>
    </scroll>

    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import navBar from 'common/navbar/NavBar'
  import cartList from './childComp/CartList'
  import bottomBar from './childComp/BottomBar'
  import scroll from 'common/scroll/Scroll'


   import { mapGetters } from 'vuex'

  export default{
    name:"cart",
    computed: {
      ...mapGetters(['cartLength'])
    },
    data(){
      return{
      }
    },
    components:{
      scroll,
      navBar,
      cartList,
      bottomBar,
    },
    activated(){
      this.$refs.cart_scroll && this.$refs.cart_scroll.scroll.refresh()
    }

  }
</script>
<style scoped>
#cart {
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
.cart-list {
  height: calc(100% - 44px); 
}

.cart-content {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>