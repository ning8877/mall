<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  name:"scroll",
  props:{
    probeType: {
      type: Number,
      default: 0 //默认不实时监听，节省性能
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },

  data(){
    return {
      scroll:null,
    }
  },

  methods:{
    backTop(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  },

  mounted(){
    if(!this.scroll){
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        click:true,
        bounce: true, //回弹动画效果
      })
      // 监听滚动的位置
      if (this.probeType == 2 || this.probeType == 3){
        this.scroll.on('scroll', position => {
          // 发送滚动事件
          this.$emit('scrollPosition',position)
        })
      }

      //监听上拉事件
      if(this.pullUpLoad){
        this.scroll.on("scrollEnd",()=>{
          if (this.scroll.y <= (this.scroll.maxScrollY + 100)) {
            this.$emit("pullingUp")
          }
          
          //2秒后，再次上拉加载，设置延迟，以免重复加载
        /*  setTimeout(()=>{
            this.scroll && this.scroll.scroll.finishPullup()
          },2000) */
        })
      }
    }
  }
}
</script>

<style>

</style>