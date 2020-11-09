<template>
<div id="sidebar">
  <scroll class="sidebar-scroll" ref="sidebar_scroll">
    <van-sidebar v-model="currentIndex">
      <van-sidebar-item :title="item.title" 
        v-for="(item, index) in categories" 
        :key="index" 
        @click="itemClick(index)"/>
    </van-sidebar>
  </scroll>
</div>
</template>

<script>
  import scroll from 'common/scroll/Scroll'

	export default {
		name: "sideBar",
    components: {
		  scroll
    },
    props: {
		  categories: {
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
		  return {
		    currentIndex: 0
      }
    },
    methods: {
		  itemClick(index) {
        this.currentIndex = index
        this.$emit('sideBarClick', index)
      }
    },
    mounted(){
      setTimeout(()=>{
        this.$refs.sidebar_scroll.scroll.refresh()  
      },300)
    }
	}
</script>

<style scoped>
#sidebar {
  background-color: #f6f6f6;
  width: 75px;
  box-sizing: border-box;
  bottom:0px;
}
.sidebar-scroll{
  height: calc(100vh - 44px);
  overflow: hidden;
}
.van-sidebar-item{
  width: 75px;
  font-size:14px;
  padding: 14px 6px;
}
</style>
