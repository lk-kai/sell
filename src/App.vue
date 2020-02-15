<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">
      I am content
    </div>
  </div>
</template>
<script>
import header from './components/header/header.vue'
export default {
  components: {
    'v-header': header
  }
}
</script>
<style lang="stylus">
  *
    margin 0
    padding 0
    #app
      .tab
        display flex
        height 40px
        line-height 40px
        width 100%
        .tab-item
          flex 1
          text-align center
</style>
