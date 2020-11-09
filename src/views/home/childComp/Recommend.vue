<template>
  <div id="recommand">
    <div class="recommand_item" v-for="(item,index) in recommends" :key="index">
      <img :src=item.image alt="">
      <div class="text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'recommend',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
#recommand{
  display: flex;
  width: 100%;
  background-color: var(--color-background);
  padding:10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommand_item{
  flex: 1;
}
.recommand_item img{
  border-radius: 50%;
  height: 68px;
  margin-bottom:10px;
}
#recommand .text{
  color:var(--color-text);
  font-size: 12px;
  text-align: center;
}
</style>