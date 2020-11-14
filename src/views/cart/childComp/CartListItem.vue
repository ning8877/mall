<template>
  <div id="cart-list-item">
    <div class="selector">
      <check-button @click.native="checkClick" v-model="cartListItem.checked"></check-button>
    </div>
    <div class="item-img">
      <img :src="cartListItem.image">
    </div>
    <div class="item-info">
      <div class="item-title">{{cartListItem.title}}</div>
      <div class="item-desc">{{cartListItem.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">¥{{cartListItem.price}}</div>
        <div clss="item-count"><van-stepper :value="cartListItem.count" async-change @change="onChange" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from './CheckButton'

export default {
  name:'cartListItem',
  props:{
    cartListItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    checkButton,
  },
  methods:{
    checkClick(){
      this.cartListItem.checked =!this.cartListItem.checked
      //强制刷新
      this.$forceUpdate() 
      this.$store.commit({type:'updateSingle',product:this.cartListItem ,status:this.cartListItem.checked})
    },
    onChange(value){
      this.$toast.loading({ forbidClick: true })
      this.$forceUpdate() 
      this.$store.dispatch('changeCount',{product:this.cartListItem, count:value}).then(res=>{
        if(res){
          this.$toast.clear()
        }
      })
    },
  }
}
</script>

<style scoped>
#cart-list-item{
  display: flex;
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid #ccc;
}
/* 复选框 */
#cart-list-item .selector{
  width:22px;
  display:flex;
  justify-content: center;
  align-items: center;
}
/* 图片 */
.item-img img{
  width: 80px;
  height: 100px;
  padding:5px;
  display: block;
  border-radius: 5px;
}
/* 商品信息 */
.item-info {
  font-size: 17px;
  padding: 5px 10px;
  position: relative;
  color: #333;
  overflow: hidden;
}
/* 标题和描述 */
 .item-title, .item-desc{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
}

.item-info .item-desc{
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}


/* 信息部分--底部 */
.info-bottom{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;

}
.info-bottom .item-price{
  color: orangered;
  float: left;
  line-height: 28px;
}
.info-bottom .item-count{
  float: right;
}

</style>