<template>
  <div id="shopInfo">
    <div class="info-top">
      <img class="logo" :src="shop.logo" alt="">
      <span class="name">{{shop.name}}</span>
    </div>
    <div class="info-middle">
      <div class="middle-item info-middle-left">
        <div class="info-sells">
          <p class="sells-count">{{shop.sells | sellCountFilter}}</p>
          <p class="sells-text">总销量</p>
        </div> 
        <div class="info-goods">
          <p class="goods-count">{{shop.goodsCount}}</p>
          <p class="goods-text">全部宝贝</p>
        </div>
      </div>
      <div class="middle-item info-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td :class="{'normal_score':!item.isBetter, 'isBetter_score': item.isBetter}">{{item.score}}</td>
            <td>
              <span :class="{'normal_text':!item.isBetter, 'isBetter_text': item.isBetter}">{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="info-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'detailShopInfo',
  props:{
    shop:{
      type:Object,
      default:{}
    }
  },
  filters:{
    sellCountFilter:function(value){
        if (value < 10000) 
          return value;
        return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
#shopInfo{
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.info-top{
  height: 45px;
  line-height: 45px;
  align-items: center;
}
.logo{
  width: 40px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 15px;
}
.info-top span.name{
  display: inline-block;
  vertical-align: text-bottom;
}

/* 店铺销量及评价 */
.info-middle{
  display: flex;
  align-items: center;
}
.middle-item{
  flex:1
} 
/* 销量信息 */
.info-middle-left{
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0,0,0,.1);
}
.sells-count, .goods-count {
    font-size: 18px;
}
.sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
}
/* 评价信息 */
.info-middle-right{
  padding-left: 20px;
  font-size: 13px;
}
.info-middle-right table {
    width: 120px;
    margin-left: 30px;
}
.info-middle-right table td {
    padding: 5px 0;
}

.normal_score{
  color:#5ea732;
}
.isBetter_score{
  color:#f13e3a;
}

.normal_text{
  color:#fff;
  background-color: #5ea732;
  text-align: center;
}
.isBetter_text{
  color:#fff;
  background-color:#f13e3a ;
  text-align: center;
}
/* 底部按钮 */
.info-bottom{
  margin-top:10px;
  text-align: center;
}
.info-bottom .enter-shop{
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>