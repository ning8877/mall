<template>
  <div id="home">
    <div class="home-nav">
      <nav-bar>
        <div slot="center">购物街</div>
      </nav-bar>
    </div>

    <scroll class="scroll_content" ref = "scroll" :probeType='3' :pullUpLoad = "true" 
      @pullingUp="loadMore" @scrollPosition = "getPosition">
      <home-swiper :banners = "banners"  @swiperImageLoad = 'swiperImageLoad'></home-swiper>
      <recommend :recommends = "recommends"></recommend>
      <feature></feature>
      <tab-control class="tab-control" :titles= "titles" ref="tabControl"  @tabChange = "tabClick"></tab-control>
      <goods-list :goodsList="goods[type].list"></goods-list>
    </scroll>

    <back-top @click.native="backTop" v-show="isShow"></back-top>

  </div>
</template>

<script>
  import goodsList from 'components/content/goods/GoodsList'
  import tabControl from 'components/content/tabControl/TabControl'
  import backTop from 'components/content/backTop/BackTop'

  import navBar from 'common/nvabar/NavBar'
  import scroll from 'common/scroll/Scroll'

  import homeSwiper from './childComp/HomeSwiper'
  import recommend from './childComp/Recommend'
  import feature from './childComp/Feature'

  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import {debounce} from '@/common/util'
  export default{
    name:"Home" ,
    data(){
      return {
        isShow:false,
        banners:[],
        recommends:[],
        titles:[
          {type:'pop',text:'流行'},
          {type:'new',text:'新款'},
          {type:'sell',text:'精选'},
        ],
        type:'pop',
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []},
        },
      }
    },
    components:{
      navBar,
      homeSwiper,
      recommend,
      feature,
      tabControl,
      goodsList,
      scroll,
      backTop
    },
    created(){
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      });
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },

    mounted(){
      var refresh = debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on("goodsImgLoad",()=>{
        refresh()
      })
    },

    methods:{
      swiperImageLoad() {
        // 获取tabControl的offsetTop
        // 通过$el属性获取组件中的元素
        // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        console.log('swP')
      },

      // 事件监听
      tabClick(type){
        this.type = type
      },

      loadMore(){
        console.log("loadMore")
        // this.getHomeGoods(this.type)
      },

      getPosition(position){
        this.isShow = -position.y > 1000
      },

      backTop(){
        this.$refs.scroll.backTop(0,0,400)
      },


      // 网络请求
      // 请求多个数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },

      // 请求商品数据
      getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1 
          // this.$refs.scroll.finishPullUp()
        })
      },
    }
  }
</script>
<style scoped>
/* #home{
  /* padding-bottom: 49px; */
  /* height: 100vh; */
/* } */ 
.home-nav{
  height: 44px;
  background-color: var(--color-tint);
  color:#fff;
  position:fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index:10;
}
.tab-control{
  position: sticky;
  top:44px;
  z-index: 10;
}
.scroll_content{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
} 
</style>
