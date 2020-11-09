<template>
<!--   <swiper class="detailSwiper">
    <swiper-item  v-for = "item in topImages" :key="item">
        <img :src="item" alt="">
    </swiper-item>
  </swiper> -->
  <van-swipe :autoplay="3000" class="detailSwiper">
    <van-swipe-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name:'detailSwiper',
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>
@import '~assets/css/resetVui.css';
.detailSwiper{
  width: 100vw;
  height: 300px;
  overflow: hidden;
}


</style>