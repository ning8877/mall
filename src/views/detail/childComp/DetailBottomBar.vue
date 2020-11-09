<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
    <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
    <van-goods-action-icon icon="star-o" text="收藏" @click="onClickIcon" />
    <van-goods-action-button color="#ffe817" type="warning" text="加入购物车" @click="addCart"/>
    <van-goods-action-button color="#f69" type="danger" text="立即购买" @click="buyCart"/>
  </van-goods-action>
</template>

<script>
export default {
  name:"detailBottomBar",
  methods:{
    onClickIcon(){
      console.log("ico")
    },
    addCart(){
      this.$emit('addCart')
    },
    buyCart(){
      this.$emit('buyCart')
    }
  }
}
</script>

<style scoped>
.van-goods-action{
  width: 100vw;
  position: absolute;
  bottom:0px;
  width: 100%;
}
</style>