<template>
  <div class="goodsList">
      <goods-list-item  v-for="(item,index) in goodsList" :key="index" :goodsItem = "item"></goods-list-item>
    <!-- 当图片大小不同的时候，两列呈现出错开的状态 -->
    <!-- <div class="list">
      <div v-for="(item,index) in goodsList" :key="index">
        <goods-list-item v-if="index%2==0" :goodsItem = "item"></goods-list-item>
      </div>
    </div>
    <div class="list">
      <div  v-for="(item,index) in goodsList" :key="index">
        <goods-list-item v-if="index%2==1" :goodsItem = "item"></goods-list-item>
      </div>
    </div> -->
  </div>
</template>

<script>
import goodsListItem from './GoodsListItem'
export default {
  name:"goodsList",
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    goodsListItem
  }
}
</script>

<style scoped>
.goodsList{
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}


/*  .goodsList{
   display: flex;
   justify-content: space-evenly;
 }
 .goodsList .list{
    width: 47%;
 } */

</style>