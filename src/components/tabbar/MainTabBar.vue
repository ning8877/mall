<template>
   <tabBar>
      <tabBarItem path="/home">
        <img slot="item-icon"  src="~assets/img/tabbar/home.svg">
        <img slot="item-icon-active"  src="~assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tabBarItem>
      <tabBarItem path="/category">
        <img slot="item-icon"  src="~assets/img/tabbar/category.svg">
        <img slot="item-icon-active"  src="~assets/img/tabbar/category_active.svg">
        <div slot="item-text">目录</div>
      </tabBarItem>
      <tabBarItem path="/cart">
        <img slot="item-icon"  src="~assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active"  src="~assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tabBarItem>
      <tabBarItem path="/profile">
        <img slot="item-icon"  src="~assets/img/tabbar/profile.svg">
        <img slot="item-icon-active"  src="~assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </tabBarItem>
    </tabBar>
</template>

<script>
import tabBar from './TabBar'
import tabBarItem from './TabBarItem'
export default{
  name:'MainTabBar',
  data() {
    return {
      src:"./assets/img/tabbar/home.svg",
    }
  },
  components:{
    tabBar,
    tabBarItem
  },
  methods: {
   
  },
}
</script>

<style>

</style>