<template>
  <div id="param-info" v-if="paramInfo != null">
    <table v-for="(item,index) in paramInfo.sizes" :key="`${index}size`" class="info-size">
      <tr v-for="(tr,index) in item" :key="`${index}sizetr`">
        <td v-for="(td,index) in tr" :key="`${index}sizetd`">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item,index) in paramInfo.infos" :key="`${index}paramtr`">
        <td class="info-param-key" >{{item.key}}</td>
        <td class="info-param-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="imageLength !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:"detailGoodsParam",
  props:{
    paramInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      imageLength:0,
    }
  },
  watch:{
    paramInfo(){
      this.imageLength = this.paramInfo.image.length
    }
  }
}
</script>

<style>
#param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
#param-info table{
  width: 100%;
  border-collapse: collapse;
}
#param-info table tr{
  height: 42px;
}
#param-info table td{
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

/* 详情信息 */
.info-param{
  border-top: 2px solid rgba(0,0,0,.1);
}
.info-param-key{
  width: 95px;
}
.info-param-value{
  color: #eb4868
}
/* 图片信息 */
.info-img{
  width: 100%;
}


</style>