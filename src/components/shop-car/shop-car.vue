<template>
  <div class="shopcar">
    <div class="content" @click="showList">
      <div class="left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'hightlight': totalCount > 0}">
            <i class="icon-shopping_cart" :class="{'hightlight': totalCount > 0}"></i>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'hightlight': totalPrice > 0}">¥{{totalPrice}}元</div>
        <div class="desc">另需配送费¥{{seller.deliveryPrice}}元</div>
      </div>
      <div class="right">
        <div @click.stop="pay" class="pay" :class="payClass">{{payDesc}}</div>
      </div>
    </div>
    <div class="ball-container">
      <div v-for="(ball, index) in balls" :key="index">
        <transition @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
          <div v-show="ball.show" class="ball">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
const BALL_LEN = 10
function createBalls() {
  let ret = []
  for (let i = 0; i < BALL_LEN; i++) {
    ret.push({
      show: false
    })
  }
  return ret
}
export default {
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
    sticky: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      balls: createBalls(),
      default: this.fold
    }
  },
  computed: {
    // 选择的food array
    selectFoods() {
      let arr = []
      this.goods.forEach(item => {
        item.foods.forEach(food => {
          if (food.count && food.count > 0) {
            arr.push(food)
          }
        })
      })
      return arr
    },
    // 选择的总价
    totalPrice() {
      let total = 0
      this.selectFoods.forEach(food => {
        total += food.price * food.count
      })
      return total
    },
    // 选择的总个数
    totalCount() {
      let total = 0
      this.selectFoods.forEach(food => {
        total += food.count
      })
      return total
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `¥${this.seller.minPrice}元起送`
      } else if (this.totalPrice < this.seller.minPrice) {
        let diff = this.seller.minPrice - this.totalPrice
        return `还差¥${diff}元起送`
      } else {
        return '去结算'
      }
    },
    payClass() {
      if (this.totalPrice < this.seller.minPrice) {
        return 'not-enough'
      } else {
        return 'enough'
      }
    }
  },
  created() {
    this.dropBalls = []
  },
  methods: {
    pay() {
      if (!this.totalPrice || this.totalPrice < this.seller.minPrice) {
        return
      }
      this.dialogComp = this.$createDialog({
        title: '支付',
        content: `支付${this.totalPrice}元`
      }).show()
    },
    showList() {
      if (this.default) {
        if (this.totalCount <= 0) {
          return
        }
        this.default = false
        this._showcarList()
        this._showcarSticty()
      } else {
        this.default = true
        this._hidecarList()
      }
    },
    _showcarList() {
      this.showCartList = this.$createShopCartList({
        $props: {
          selectFoods: 'selectFoods'
        },
        $events: {
          hide: () => {
            this.default = true
          },
          leave: () => {
            this._hidecarSticty()
          },
          add: el => {
            this.shopcarstictyComp.drop(el)
          }
        }
      })
      this.showCartList.show()
    },
    _hidecarList() {
      const comp = this.sticky ? this.$parent.list : this.showCartList
      comp.hide() && comp.hide()
    },
    _showcarSticty() {
      this.shopcarstictyComp =
        this.shopcarstictyComp ||
        this.$createShopCartSticky({
          $props: {
            seller: 'seller',
            goods: 'goods',
            fold: 'default',
            list: this.showCartList
          }
        })
      this.shopcarstictyComp.show()
    },
    _hidecarSticty() {
      this.shopcarstictyComp.hide()
    },
    drop(el) {
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el
          this.dropBalls.push(ball)
          return
        }
      }
    },
    beforeDrop(el) {
      const ball = this.dropBalls[this.dropBalls.length - 1]
      const rect = ball.el.getBoundingClientRect()
      let x = rect.left - 32
      let y = -(window.innerHeight - rect.top - 22)
      el.style.display = ''
      el.style.transform = el.style.webkitTransform = `translate3d(0,${y}px,0)`
      let inner = el.getElementsByClassName('inner-hook')[0]
      inner.style.transform = inner.style.webkitTransform = `translate3d(${x}px,0,0)`
    },
    dropping(el, done) {
      this._reflow = document.body.offsetHeight
      el.style.transform = el.style.webkitTransform = `translate3d(0,0,0)`
      let inner = el.getElementsByClassName('inner-hook')[0]
      inner.style.transform = inner.style.webkitTransform = `translate3d(0,0,0)`
      el.addEventListener('transitionend', done)
    },
    afterDrop(el) {
      const ball = this.dropBalls.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    }
  },
  watch: {
    fold(newVal) {
      this.default = newVal
    },
    totalCount(newVal) {
      if (!this.default && !newVal) {
        this._hidecarList()
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.content
  display: flex
  background: #141d27
  .left
    flex: 1
    .logo-wrapper
      display: inline-block
      position: relative
      top: -10px
      margin: 0 12px
      padding: 6px
      width: 56px
      height: 56px
      box-sizing: border-box
      vertical-align: top
      border-radius: 50%
      background: #141d27
      .logo
        width: 100%
        height: 100%
        text-align: center
        border-radius: 50%
        background: #2b343c
        &.hightlight
          background: rgb(0, 160, 220)
        .icon-shopping_cart
          font-size: 24px
          color: #80858a
          line-height: 44px
          &.hightlight
            color: #fff
      .num
        position: absolute
        top: 0
        right: 0
        width: 24px
        height: 16px
        line-height: 16px
        border-radius: 16px
        text-align: center
        font-size: 9px
        color: #ffffff
        font-weight: 700
        background: rgb(240, 20, 20)
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
    .price
      display: inline-block
      vertical-align: top
      margin-top: 12px
      padding-right: 12px
      line-height: 24px
      box-sizing: border-box
      border-right: 1px solid rgba(255, 255, 255, 0.1)
      font-size: 16px
      font-weight: 700
      color: rgba(255, 255, 255, 0.4)
      &.hightlight
        color: #fff
    .desc
      display: inline-block
      vertical-align: top
      line-height: 24px
      margin: 12px 0 0 12px
      color: rgba(255, 255, 255, 0.4)
      font-size: 10px
  .right
    flex: 0 0 105px
    width: 105px
    .pay
      height: 48px
      line-height: 48px
      text-align: center
      color: rgba(255, 255, 255, 0.4)
      font-size: 12px
      font-weight: 700
      &.not-enough
        background: #2b333b
      &.enough
        background: #00b43c
        color: #fff
.ball-container
  .ball
    position: fixed
    left: 32px
    bottom: 22px
    z-index: 200
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
    .inner
      width: 16px
      height: 16px
      border-radius: 50%
      background: rgb(0, 160, 220)
      transition: all 0.4s linear
</style>
