<template>
  <div id="detail">
    <detail-nav-bar @titleClick="getD"></detail-nav-bar>
    <detail-swiper :topImages = "topImages"></detail-swiper>
    <detail-info></detail-info>
  </div>
</template>

<script>
import detailNavBar from './childComp/DetailNavBar'
import detailSwiper from './childComp/DetailSwiper'
import DetailInfo from './childComp/DetailInfo'

import {getDetail} from 'network/detail'
export default {
  name:'detail',
  data(){
    return {
      iid:'',
      topImages:[],
    }
  },
  components:{
    detailNavBar,
    detailSwiper,
    DetailInfo,
  },
  created(){
  },
  mounted(){
    this.iid = this.$route.query.iid
    getDetail(this.iid).then(res => {
      // 1.获取顶部图片轮播数据
      if(res){
          this.topImages = res.result.itemInfo.topImages
          
      }
    })
  },
  methods:{
    getD(type,index){
      console.log(type,index)
    }
  }
}
</script>

<style scoped>

</style>