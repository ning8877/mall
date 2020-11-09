<template>
  <div id="home">
    <nav-bar  class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control" :titles= "titles" ref="tabControl_1"  
      v-show="isTabFixed" @tabChange = "tabClick"></tab-control>

    <scroll class="scroll_content" ref = "scroll" :probeType='3' :pullUpLoad = "true" 
      @pullingUp="loadMore" @scrollPosition = "getPosition">

      <home-swiper :banners = "banners"  @swiperImageLoad = 'swiperImageLoad'></home-swiper>
      <recommend :recommends = "recommends"></recommend>
      <feature></feature>
      <tab-control :titles= "titles" ref="tabControl" @tabChange = "tabClick"></tab-control>
      <goods-list :goodsList="goods[type].list"></goods-list>
      <p class="tip" v-show="isShowMessage">{{message}}</p>
    </scroll>

    <back-top @click.native="backTop" v-show="isShow"></back-top>

  </div>
</template>

<script>
  import goodsList from 'components/content/goods/GoodsList'
  import tabControl from 'components/content/tabControl/TabControl'
  import backTop from 'components/content/backTop/BackTop'

  import navBar from 'common/navbar/NavBar'
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
        isShowMessage:false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0,
        message:"加载更多",
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
      this.getHomeMultidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },

    mounted(){
      var refresh = debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on("homeImageLoad",()=>{
        refresh()
      })
      this.swiperImageLoad()
      // this.$refs.scroll.scroll.refresh()
    },

    // 离开home页面时，保存滚动的位置
    activated(){
      this.$refs.scroll.scroll.refresh()
      this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated(){
      this.saveY = this.$refs.scroll.scroll.y
      // 取消事件总线的监听
    },
    methods:{
      swiperImageLoad() {
        // 获取tabControl的offsetTop
        // 通过$el属性获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      },

      // 事件监听
      tabClick(index,type){
        this.type = type
        // 使两个tabControl的值保持一直
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControl_1.currentIndex = index
      },

      loadMore(){
        this.isShowMessage = true
        this.getHomeGoods(this.type)
      },

      getPosition(position){
        // 1.判断backtop的显示
        this.isShow = -position.y > 1000
        // 2.tabControl吸顶效果
        this.isTabFixed = (- position.y) >= this.tabOffsetTop
      },

      backTop(){
        this.$refs.scroll.backTop(0,0,400)
      },


      // 网络请求
      // 请求多个数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          if(res && res.data){
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
          }
        })
      },

      // 请求商品数据
      getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          if(res && res.data.list){
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1 
            this.isShowMessage =false
          }
        })
      },
    }
  }
</script>

<style scoped>
.home-nav{
  height: 44px;
  background-color: var(--color-tint);
  color:#fff;
  /* 在浏览器 */
  /* position:fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index:10; */
}
.fixed{
  position: fixed;
  top:44px; 
}
.tab-control{
  position: relative;
  z-index: 10;
}
.scroll_content{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
} 
.tip{
  text-align: center;
}
</style>
