<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'backTop',
}
</script>

<style>
.backTop{
  position: fixed;
  bottom: 60px;
  right:15px;
  z-index: 12;
}
.backTop img{
  width: 45px;
}
</style>