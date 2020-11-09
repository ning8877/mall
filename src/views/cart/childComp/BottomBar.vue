<template>
    <div class="bottom-menu">
    <checkButton class="select-all"  :value= "isSelectAll" @click.native="checkClick"></checkButton>
    <span @click="checkClick">全选</span>
    <span class="total-price">合计:¥{{totalPrice}}</span>
    <span class="buy-product" @click="buyClick">付款({{checkLength}})</span>
  </div>
</template>

<script>
  import checkButton from './CheckButton'
  import { mapGetters } from 'vuex'

  export default {
    name: 'cartBottomBar',
    components: {
      checkButton,
    },
    //监听属性 类似于data概念
    computed: {
      ...mapGetters(['cartList','totalPrice','isSelectAll']),
      // 付款
      checkLength() {
        return this.cartList.filter(item => item.checked).length
      },
    },
    //方法集合
    methods: {
      // 全选按钮
      checkClick() {
        if(this.isSelectAll) { 
          this.$store.commit('updateCheck',false)
        } else {
          this.$store.commit('updateCheck',true)
        }
        this.$forceUpdate()
      },
      // 付款按钮
      buyClick() {
        if(!this.isSelectAll) {
          this.$toast('请选择要购买的商品')
        }
      }
    },
  }
</script>
<style scoped>
    .bottom-menu {
    width: 100%;
    height: 44px;
    /* background-color: #eee; */
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>