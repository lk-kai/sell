<template>
  <div class="box">
    <div class="left"></div>
    <div class="right"></div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="stylus" scoped>
.box {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 48px;
  width: 100%;

  .left {
    flex: 0 0 80px;
    width: 80px;
    background-color: red;
  }

  .right {
    flex: 1;
    background-color: green;
  }

  .bottom {
    position: fixed;
    height: 48px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: black;
  }
}
</style>
