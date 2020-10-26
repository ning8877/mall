<template>
  <div id="nav">
    <router-view></router-view>
    <mainTabBar></mainTabBar>
  </div>
</template>


<script>
import mainTabBar from 'components/tabbar/MainTabBar'
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
@import './assets/css/base.css'

</style>
