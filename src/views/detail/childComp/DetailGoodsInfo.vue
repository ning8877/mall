<template>
  <div id="detail-goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="info-desc">{{goodsInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in list" :key="index" :src="item" @load = "imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name:'detailGoodsInfo',
  props:{
    goodsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      counter:0,
      imageLength:0,
      key:'',
      list:[],
    }
  },
  methods:{
    imgLoad(){
      this.counter++
      if(this.counter == this.imageLength){
        this.$emit('goodsInfoLoad')
      }
    }
  },
  watch:{
    goodsInfo(){
      this.imageLength =  this.goodsInfo.detailImage[0].list.length
      this.key = this.goodsInfo.detailImage[0].key
      this.list = this.goodsInfo.detailImage[0].list
    }
  },
}
</script>

<style scoped>
#detail-goods-info{
  width: 100vm;
  padding:0px 10px;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc{
  padding: 15px 0;
  font-size: 14px;
}

/* 描述前后的横线 */
.info-desc .start, .info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}
.info-desc .start::before, .info-desc .end::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}
/* 下面图片部分 */
.info-key{
  margin: 10px 0;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>