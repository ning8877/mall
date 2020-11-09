<template>
  <div id = "detailNavBar">
    <nav-bar class="navBar">
      <div slot="left" class="left" @click="backHome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <span class="item" v-for="(item,index) in titles"  :key="item.text" @click="itemClick(item.type,index)" 
          :class="{detail_active:index==currentIndex}">{{item.text}}</span>
      </div>
    </nav-bar>
  </div>

</template>

<script>
import navBar from 'common/navbar/NavBar'
export default {
  name:'detailNavBar',
  data(){
    return{
      currentIndex:0,
       titles:[
        {type:'1',text:'商品'},
        {type:'2',text:'参数'},
        {type:'3',text:'评论'},
        {type:'4',text:'推荐'},
      ]
    }
  },
  components:{
    navBar
  },
  methods:{
    itemClick(type,index){
      this.currentIndex = index
      this.$emit('titleClick',type,index)
    },
    backHome(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.navBar{
  width: 100vm;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.detail_active{
  color:var(--color-tint)
}
.left{
  padding:6px 0;
}
.center{
  display: flex;
}
.center .item{
  flex:1;
}

</style>