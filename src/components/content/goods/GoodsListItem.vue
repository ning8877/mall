<template>
  <div class="goodsItem" @click="itemClick">
    <img :src="goodsItem.show.img" @load="imgLoad()">
    <div class="goodsInfo">
      <p class="desc">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'goodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  computed:{
    showImage:{
      set:function(){
        this.showImage = this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      },
      get:function(){
        return this.showImage
      },
    }
  },
  methods:{
    itemClick(){
      let iid = this.goodsItem.iid;
      // 跳转到详情页面
      this.$router.push({path:'/detail',query:{iid}})
    },
    imgLoad(){
      this.$bus.$emit('goodsImgLoad')
    } 
  }
}
</script>

<style>
.goodsItem{
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.goodsItem img{
  width: 100%;
  border-radius: 5px;
}
.goodsInfo{
  font-size: 12px;
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
}
.desc{
  width: 100%;
  overflow: hidden;
}
.goodsInfo {
  text-align: center;
}
.goodsInfo .desc{
  color: var(--color-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsInfo .price{
  color:var(--color-high-text);
  margin-right:30px; 
}
 .goodsInfo .collect{
  position: relative;
  color: var(--color-text);
}
 .goodsInfo .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top:-1px;
  width:14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0px/14px 14px;
}
</style>