<template>
<div id="cart-list">
  <cart-list-item v-for="(item,index) in cartList" :key= "index+item.checked" :cartListItem = "item"
  @touchstart.native="getTouchStart(item.iid)" @touchend.native="getTouchEnd(item.iid)"></cart-list-item>
</div>
</template>

<script>
import cartListItem from './CartListItem'

import { mapGetters } from 'vuex'
export default {
  name:'cartList',
  computed:{
    ...mapGetters(['cartList'])
    
  }, 
  data(){
    return{
      timer:null
    }
  },
  components:{
    cartListItem,
  },
  methods:{
    // 显示弹窗
    showDialog(iid){
      let that = this
      this.$dialog.confirm({
        message: '确定删除此商品？',
        beforeClose(action, done) {
          if (action === 'confirm') {
            that.$store.dispatch("deleteProduct",iid).then(res =>{
              done()
            })
          } else {
            done()
          }
        },
      }) 
    },

    // 长按删除
    getTouchStart(iid){
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
        this.showDialog(iid)
      },500);
    },
    getTouchEnd(iid){
      clearTimeout(this.timer);
    }
  }
}
</script>

<style scoped>
</style>