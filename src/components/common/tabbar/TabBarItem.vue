<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 这边有个div是因为，活跃的时候给文字变色，但是如果绑定在插槽上，插槽是会被替换的，所以无效 -->
    <div :style="acitiveStyle">
      <slot name="item-text"></slot>
    </div>
   </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
      path:String,
      activeColor:{
        type:String,
        default:"#FF5777",
      }
  },
  computed:{
    isActive:{
      set:function(){
        // 当前活跃的路由路径时候和当前的路径相同
        this.$route.path.indexOf(this.path)!==-1
      },
      get:function(){
        return this.$route.path.indexOf(this.path)!==-1
      }
    },
    acitiveStyle:{
       set:function(){
        // 当前活跃的路由路径时候和当前的路径相同
        this.isActive? {color:this.activeColor}:{}
      },
      get:function(){
        return this.isActive? {color:this.activeColor}:{}
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
      this.isActive = !this.isActive
    }
  },
}
</script>

<style>
#tab-bar-item{
  text-align: center;
  flex:1;
  font-size: 14px;
}
#tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}

</style>