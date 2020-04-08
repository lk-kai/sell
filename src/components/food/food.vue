<template>
  <transition name="move" @after-leave="afterleave">
    <div class="food" v-show="foodFlag" ref="food">
      <cube-scroll ref="scroll">
        <div class="img-header">
          <img :src="food.image" />
          <i @click="hide" class="icon-arrow_lift"></i>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}</span>
          </div>
          <div class="price">
            <span class="now">¥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">{{food.oldPrice}}</span>
          </div>
        </div>
        <div class="control-wrapper">
          <cartcontrol :food="food" @cartAdd="add"></cartcontrol>
        </div>
        <transition name="fade">
          <div class="join-car" v-show="food.count===0 || !food.count" @click.stop="addFirst">加入购物车</div>
        </transition>
      </cube-scroll>
    </div>
  </transition>
</template>
<script>
import cartcontrol from '../cart-control/cart-control'
export default {
  name: 'food',
  data() {
    return {
      foodFlag: false
    }
  },
  props: {
    food: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    cartcontrol
  },
  methods: {
    show() {
      this.foodFlag = true
    },
    hide() {
      this.foodFlag = false
    },
    addFirst(event) {
      this.$set(this.food, 'count', 1)
      this.$emit('add', event.target)
    },
    afterleave() {
      this.$emit('leave')
    },
    add(target) {
      this.$emit('add', target)
    }
  }
}
</script>
<style lang="stylus" scoped>
.move-enter-active, .move-leave-active
  transition: all 0.3s ease
.move-enter-to, .move-leave
  opacity: 1
.move-enter, .move-leave-to
  transform: translateX(100%)
  opacity: 0
.food
  position: fixed
  z-index: 30
  top: 0
  left: 0
  right: 0
  width: 100%
  bottom: 48px
  background-color: #fff
  .img-header
    position: relative
    width: 100%
    height: 0
    padding-top: 100%
    img
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
    i
      position: absolute
      padding: 10px
      top: 8px
      left: 0
      color: #fff
  .content
    padding: 18px
    .title
      line-height: 14px
      margin-bottom: 8px
      fontsize: 14px
      font-weight: 700
      color: rgb(7, 17, 27)
    .detail
      margin-bottom: 18px
      height: 10px
      line-height: 10px
      font-size: 0
      .sell-count, .rating
        font-size: 10px
        color: rgb(147, 153, 159)
      .sell-count
        margin-right: 12px
    .price
      font-weight: 700
      line-height: 24px
      .now
        margin-right: 8px
        font-size: 14px
        color: rgb(240, 20, 20)
      .old
        text-decoration: line-through
        font-size: 10px
        color: rgb(147, 153, 159)
  .control-wrapper
    position: absolute
    right: 12px
    bottom: 12px
  .join-car
    position: absolute
    right: 18px
    bottom: 18px
    z-index: 10
    padding: 0 12px
    box-sizing: border-box
    border-radius: 12px
    color: #fff
    background: rgb(0, 160, 220)
    height: 24px
    line-height: 24px
    font-size: 10px
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.3s
    &.fade-enter, &.fade-leave-active
      opacity: 0
      z-index: -1
</style>
