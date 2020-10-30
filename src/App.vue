<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <mainTabBar  v-show="$route.path!=='/detail'"></mainTabBar>
  </div>
</template>


<script>
import mainTabBar from 'components/content/mainTabbar/MainTabBar'
export default{
  name:'App',
  data() {
    return {

    }
  },
  components:{
    mainTabBar
  }

}
</script>
<style>
@import './assets/css/base.css';

</style>
