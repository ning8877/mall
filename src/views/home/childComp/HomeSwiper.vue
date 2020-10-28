<template>
  <swiper>
    <swiper-item v-for = "(item,index) in banners" :key="index">
      <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import swiper from 'common/swiper/Swiper'
import swiperItem from 'common/swiper/SwiperItem'
export default {
  name:'homeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      isLoad:false
    }
  },
  components:{
    swiper,
    swiperItem
  },
  methods:{
    // 检查轮播图是否加载完成
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    },
   
  },
}
</script>

<style>

</style>