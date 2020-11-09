<template>
  <div class="tabControl">
    <div class="tabControlItem" v-for="(item,index) in titles" :key="index" 
    @click="tabClick(index, item.type)">
      <span :class="{active:index == currentIndex}">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0,
    }
  },
  methods:{
    tabClick(index,type){
      this.currentIndex = index
      this.$emit('tabChange',index,type)
    }
  }
}
</script>

<style>
.tabControl{
  background-color:#fff;
}
.tabControl{
  display: flex;
  text-align: center;
  color:var(--color-text);
  font-size: 14px;
}
.tabControl .tabControlItem{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tabControlItem span{
  padding: 5px;
  /* border-bottom:3px solid transparent; */
}
.active{
  color:var(--color-tint);
  border-bottom:3px solid var(--color-tint);
}
</style>