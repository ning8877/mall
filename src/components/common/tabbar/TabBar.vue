<template>
<div id="tab-bar">
  <slot></slot>
</div>
</template>

<script>
export default {
  name:'TabBar',
  data() {
    return {

    }
  },
}
</script>

<style>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  width: 100%;
  height: 49px;
  left: 0;
  bottom: 0px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100,0.1);
}

</style>