<template>
  <div id="baseInfo" v-if="Object.keys(goods).length !==0">
    <div class="infoTitle">{{goods.title}}</div>
    <div class="infoPrice">
      <span class="n-price">{{goods.price}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="infoOther">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.columns[2]}}</span>
    </div>
    <div class="infoService">
      <span class="infoServiceItem" v-for="index in goods.services.length" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:"detailBaseInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      },
    }
  }
}
</script>

<style scoped>
#baseInfo{
  width: 100vw;
  margin-top: 15px;
  padding:5px 8px;
  color:#999;
  border-bottom:5px solid #f2f5f8;

}
#baseInfo infoTitle{
  color:#222;
}
/* 价格 */
.infoPrice {
  margin-top:10px ;
}
.infoPrice .n-price{
  color:var(--color-high-text);
  font-size:24px;
  margin-right: 8px;
}
.infoPrice .o-price{
  font-size: 13px;
  color:var(--color-text);
  margin-right: 8px;
  text-decoration: line-through var(--color-text);

}
.infoPrice .discount{
  font-size: 12px;
  padding:2px 5px;
  color:#fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  position: relative;
  top:-8px
}

/* 销量，收藏信息 */
.infoOther{
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 13px;
  border-bottom:1px solid rgba(100, 100, 100, 0.2);
}
/* 延误必赔等商品服务 */
.infoService{
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  flex-wrap: wrap;
  padding:10px 0;
}
.infoService img{
  width: 14px;
  position: relative;
  top:2px;
}

.infoServiceItem span {
  font-size: 13px;
  color: #333;
}
.infoServiceItem{
  margin-right:5px
}
</style>