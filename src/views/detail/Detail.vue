<template>
  <div id="detail">
      <detail-nav-bar @titleClick="getD" class="detail-nav-bar"> </detail-nav-bar>
      <scroll class="detail-content" ref="detail_scroll" :probe-type = '3'>
        <detail-swiper :topImages = "topImages"></detail-swiper>
        <detail-base-info :goods = "goods"></detail-base-info>
        <detail-shop-info :shop = "shop"></detail-shop-info>
        <detail-goods-info :goodsInfo = "goodsInfo" @goodsInfoLoad ="goodsInfoLoad"></detail-goods-info>
        <detail-param-info :paramInfo = "paramInfo"></detail-param-info>
        <detail-comment-info :commentInfo = "commentInfo"></detail-comment-info>
        <goods-list :goodsList="recommend"></goods-list>
      </scroll>
  </div>
</template>

<script>
import scroll from 'common/scroll/Scroll'

import goodsList from 'components/content/goods/GoodsList'

import detailNavBar from './childComp/DetailNavBar'
import detailSwiper from './childComp/DetailSwiper'
import detailBaseInfo from './childComp/DetailBaseInfo'
import detailShopInfo from './childComp/DetailShopInfo'
import detailGoodsInfo from './childComp/DetailGoodsInfo'
import detailParamInfo from './childComp/DetailParamInfo'
import detailCommentInfo from './childComp/DetailCommentInfo'

import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail'
import {debounce} from '@/common/util'

export default {
  name:'detail',
  data(){
    return {
      iid:'',
      topImages:[],
      goods:{},
      shop:{},
      goodsInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommend:[],
    }
  },
  components:{
    scroll,
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo, 
    detailGoodsInfo,  
    detailParamInfo, 
    detailCommentInfo,
    goodsList,
  },
  created(){
  },
  updated(){
    this.$refs.detail_scroll.scroll.refresh()
  },
  mounted(){
    this.iid = this.$route.query.iid
    getDetail(this.iid).then(res => {
      // 1.获取顶部图片轮播数据
      if(res){
          let data = res.result
          this.topImages = res.result.itemInfo.topImages
          // 商品信息
          this.goods= new Goods(data.itemInfo,data.columns, data.shopInfo.services)
          // 店铺信息
          this.shop = new Shop(data.shopInfo)
          // 商品详情信息
          this.goodsInfo = data.detailInfo
          // 保存参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
           // 获取评论信息
          if(data.rate.cRate !== 0) {
            this.commentInfo = data.rate.list[0]
            console.log(this.commentInfo)
          }
      }
    })
    // 推荐
    getRecommend().then(res=>{
      this.recommend = res.data.list
    })
    // 防抖
    var refresh = debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on("goodsImgLoad",()=>{
        refresh()
    })
  },
  methods:{
    getD(type,index){
      console.log(type,index)
    },
    goodsInfoLoad(){
      this.$refs.detail_scroll.scroll.refresh()
    }
  }
}
</script>

<style scoped>
#detail{
  height: 100vh;
}
#detail .detail-nav-bar{
  position: relative;
  z-index:9;
  background-color: #fff;
} 
.detail-content{
  height: calc(100% - 44px);
}

</style>