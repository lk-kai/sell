<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <tab></tab>
    </div>
  </div>
</template>
<script>
import { getSeller } from './api/index'
import header from './components/header/header.vue'
import tab from './components/tab/tab'
// const ERR_OK = 0
export default {
  data() {
    return {
      seller: {}
    }
  },
  created() {
    getSeller().then(res => {
      this.seller = res
    })
  },
  components: {
    'v-header': header,
    tab
  }
}
</script>
<style lang="stylus" scoped>
@import './common/stylus/mixin.styl'
*
  margin: 0
  padding: 0
  #app
    width: 100%
    height: 100%
    .tab-wrapper
      position: fixed
      top: 134px
      left: 0
      bottom: 0
      right: 0
</style>
