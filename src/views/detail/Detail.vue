<template>
  <div id="detail">
      <detail-nav-bar @titleClick="getD" class="detail-nav-bar" ref="detailNav"> </detail-nav-bar>
      <scroll class="detail-content" ref="detail_scroll" :probe-type = '2' @scrollPosition = "updatePositon">

        <detail-swiper :topImages = "topImages"></detail-swiper>
        <detail-base-info :goods = "goods"></detail-base-info>
        <detail-shop-info :shop = "shop"></detail-shop-info>
        <detail-goods-info :goodsInfo = "goodsInfo" @goodsInfoLoad ="goodsInfoLoad"></detail-goods-info>
        <detail-param-info ref="param" :paramInfo = "paramInfo"></detail-param-info>
        <detail-comment-info ref="comment" :commentInfo = "commentInfo"></detail-comment-info>
        <goods-list ref="recommend" :goodsList="recommend"></goods-list>
      </scroll>
      <back-top @click.native="backTop" v-show="isShow"></back-top>
      <detail-bottom-bar class="bottom-bar" @addCart = "addToCart" @buyCart = "buyCart"></detail-bottom-bar>
  </div>
</template>

<script>
import scroll from 'common/scroll/Scroll'
import backTop from 'components/content/backTop/BackTop'
import goodsList from 'components/content/goods/GoodsList'

import detailNavBar from './childComp/DetailNavBar'
import detailSwiper from './childComp/DetailSwiper'
import detailBaseInfo from './childComp/DetailBaseInfo'
import detailShopInfo from './childComp/DetailShopInfo'
import detailGoodsInfo from './childComp/DetailGoodsInfo'
import detailParamInfo from './childComp/DetailParamInfo'
import detailCommentInfo from './childComp/DetailCommentInfo'
import detailBottomBar from './childComp/DetailBottomBar'

import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail'
import {debounce} from '@/common/util'

export default {
  name:'detail',
  data(){
    return {
      isShow:false,
      themeTopYs:[],
      iid:'',
      topImages:[],
      goods:{},
      shop:{},
      goodsInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommend:[],
      getThemeY:null,
      currentIndex:0,//当前导航栏的Index
      product:{},
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
    backTop,
    detailBottomBar,
  },
  created(){
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
          }
      }
    })
    // 推荐
    getRecommend().then(res=>{
      this.recommend = res.data.list
    })

    this.$nextTick(()=>{
      // 赋值tabcontol中item开始的位置
      this.getThemeY = debounce(()=>{
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.$refs.param? this.themeTopYs.push(this.$refs.param.$el.offsetTop):this.themeTopYs.push(0)
        this.$refs.comment? this.themeTopYs.push(this.$refs.comment.$el.offsetTop):this.themeTopYs.push(0)
        this.$refs.recommend ? this.themeTopYs.push(this.$refs.recommend.$el.offsetTop):this.themeTopYs.push(0)
      },300)
    })
  },
  mounted(){
     // 防抖
      var refresh = debounce(this.$refs.detail_scroll.refresh,500)
      this.$bus.$on("detailImageLoad",()=>{
        refresh()
        this.getThemeY()
    })
  },
  methods:{
    getD(type,index){
      this.$refs.detail_scroll.scroll.scrollTo(0,-this.themeTopYs[index],500)
    },
    goodsInfoLoad(){
      this.$refs.detail_scroll.refresh()
    },
    updatePositon(position){
      this.isShow = -position.y > 800
      let positionY = -position.y
      let index = 0
      switch(true){
        case (positionY < this.themeTopYs[1]): index = 0 ; break;
        case (positionY < this.themeTopYs[2]): index = 1 ; break;
        case (positionY < this.themeTopYs[3]): index = 2 ; break;
        default: index = 3 ; break;
      }
      if(this.$refs.detailNav.currentIndex !== index){
        this.$refs.detailNav.currentIndex = index
      }
    },
    backTop(){
      this.$refs.detail_scroll.backTop(0,0,400)
    },
    // 购物车  
    addToCart(){
      this.product.image = this.topImages[0]
      this.product.title = this.goods.title
      this.product.desc = this.goods.desc
      this.product.price = this.goods.lowNowPrice
      this.product.iid = this.iid
      this.$store.dispatch('addToCart',this.product).then(res =>{
        this.$toast(res)
      })
    },
    buyCart(){
        let product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.lowNowPrice
        product.iid = this.iid
        // 放入到购物车中
        if(product.iid){
          this.$store.dispatch('buyCart',product).then(res => {
            this.$toast(res)
            this.$router.push('/cart')
          })}else {
            this.$toast('添加失败请刷新重试')
          }
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
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
}
/* 底部导航栏 */
/* .bottom-bar{
  position: fixed;
  bottom:49px;
  height: 49px;
  width: 100vw;
} */

</style>