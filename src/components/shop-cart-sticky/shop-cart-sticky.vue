<template>
  <div class="shop-cart-sticky" v-show="visible">
    <ShopCart ref="shopCart" :seller="seller" :goods="goods" :sticky="true" :fold="fold"></ShopCart>
  </div>
</template>

<script>
import ShopCart from '../shop-car/shop-car'

export default {
  name: 'shop-cart-sticky',
  data() {
    return {
      visible: false
    }
  },
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    },
    goods: {
      type: Array,
      default() {
        return []
      }
    },
    fold: {
      type: Boolean,
      default: true
    },
    list: {
      type: Object,
      default() {
        return {}
      }
    },
    sticky: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show() {
      this.visible = true
      // this.$emit('showprop')
    },
    hide() {
      this.visible = false
      this.$emit('hideprop')
    },
    drop(el) {
      this.$refs.shopCart.drop(el)
    }
  },
  components: {
    ShopCart
  }
}
</script>

<style lang="stylus" scoped>
.shop-cart-sticky
  position: absolute
  left: 0
  bottom: 0
  z-index: 999
  width: 100%
  height: 48px
</style>
