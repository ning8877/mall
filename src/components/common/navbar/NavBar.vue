<template>
  <div class="navBar">
    <div class="left">
      <slot name = "left"></slot>
    </div>
    <div class="center">
      <slot name = "center"></slot>
    </div>
    <div class="right">
      <slot name = "right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"navBar",
}
</script>

<style>
.navBar{
  display: flex;
  height: 44px;
  line-height: 44px;
}
.left,.right{
  width:60px;
  text-align: center;
}
.center{
  flex:1;
  text-align: center;
}
</style>