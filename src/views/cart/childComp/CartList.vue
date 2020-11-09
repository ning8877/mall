<template>
<div id="cart-list">
  <cart-list-item v-for="(item,index) in cartList" :key= "index+item.checked" 
  :cartListItem = "item"></cart-list-item>
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
 /*  data(){
    return {
      cartList:this.$store.state.cartList
    }
  }, */
  components:{
    cartListItem,
  },
}
</script>

<style scoped>
</style>