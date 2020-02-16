<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
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
  @import "./common/stylus/mixin.styl"
  *
    margin 0
    padding 0
    #app
      .tab
        display flex
        width 100%
        height 40px
        line-height 40px
        // 测试vscode提交代码
        // border-bottom 1px solid rgba(7,17,27,0.1)
        border-1px(rgba(7,17,27,0.1))
        .tab-item
          flex 1
          text-align center
          &>a
            display block
            text-decoration none
            font-size 14px
            color rgb(77,85,93)
            &.is-active
              color rgb(240,20,20)
</style>
