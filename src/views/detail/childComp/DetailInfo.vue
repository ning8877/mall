<template>
  <div id="detail">
    <p>{{desc}}阿萨大</p>
    <div class="aboutPrice">
      <span>￥{{currentPrice}}</span>
      <span>{{prePrice}}</span>
      <span>今日特价</span>
    </div>
    <div class="detailInfo">
      <span>销量{{}}</span>
      <span>收藏{{}}人</span>
      <span>72小时发货</span>
    </div>
    <div class="yh">
      <span>退货补运费</span>
      <span>全国包邮</span>
      <span>7天无理由退货</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"detailInfo",
  props:{
    desc:{
      type:String,
      default:'球状你asdasddddddddddddaeqwe阿萨大大伟大我去去问驱蚊器为',
    },
    currentPrice:{
      type:Number,
      default:109.00
    },
    prePrice:{
      type:Number,
      default:155.72
    },
  }
}
</script>

<style scoped>
#detail{
  padding: 5px;
  border-bottom:3px solid rgba(100, 100, 100, 0.2);

}
#detail p{
  padding:5px 0;
  color:#000;
}
.aboutPrice {
  margin: 5px 0 15px;
}
.aboutPrice span:first-of-type{
  color:var(--color-tint);
  font-size:22px;
  margin-right: 5px;
}
.aboutPrice span:nth-child(2){
  color:var(--color-text);
  margin-right: 5px;
}
.aboutPrice span:last-of-type{
  color:#fff;
  background-color: var(--color-tint);
  border-radius: 4px;
}
.detailInfo{
  display: flex;
  font-size: 12px;
  padding-bottom:8px;
  border-bottom:1px solid rgba(100, 100, 100, 0.2);
}
.detailInfo span{
  flex:1;
}
.yh{
  padding:15px 0;
  display: flex;
}
.yh span{
  flex:1;
}
.yh span::before{
  content: '';
  position: absolute;
  left: -15px;
  top:-1px;
  width:14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0px/14px 14px;
}
</style>