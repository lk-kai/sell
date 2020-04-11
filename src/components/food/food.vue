<template>
  <transition name="move" @after-leave="afterleave">
    <div class="food" v-show="foodFlag" ref="food">
      <cube-scroll ref="scroll">
        <div class="foot-content">
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
              <div class="control-wrapper">
                <cartcontrol :food="food" @cartAdd="add"></cartcontrol>
              </div>
              <transition name="fade">
                <div
                  class="join-car"
                  v-show="food.count===0 || !food.count"
                  @click.stop="addFirst"
                >加入购物车</div>
              </transition>
            </div>
          </div>
          <split v-show="food.info"></split>
          <div class="info" v-show="food.info">
            <h1 class="title">商品信息</h1>
            <p class="text">{{food.info}}</p>
          </div>
          <split></split>
          <div class="rating">
            <h1 class="title">商品评价</h1>
            <ratingselect
              :ratings="food.ratings"
              :selectType="selectType"
              :desc="desc"
              :onlyContent="onlyContent"
              @ratingType="ratingType"
              @tog="tog"
            ></ratingselect>
            <div class="rating-wrapper">
              <ul v-show="food.ratings && food.ratings.length">
                <li v-for="(rating, index) in needrating" :key="index" class="rating-item">
                  <div class="user">
                    <span class="name">{{rating.username}}</span>
                    <img class="avatar" width="12" height="12" :src="rating.avatar" alt />
                  </div>
                  <div class="time">{{rating.rateTime | formDate}}</div>
                  <p class="text">
                    <span
                      :class="{'icon-thumb_up': rating.rateType === 0,'icon-thumb_down':rating.rateType === 1}"
                    >{{rating.text}}</span>
                  </p>
                </li>
              </ul>
              <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
            </div>
          </div>
        </div>
      </cube-scroll>
    </div>
  </transition>
</template>
<script>
import cartcontrol from '../cart-control/cart-control'
import split from '../split/split'
import ratingselect from '../ratingselect/ratingselect'
import moment from 'moment'
// const POSITIVE = 0
// const NEGATIVE = 1
const ALL = 2
export default {
  name: 'food',
  data() {
    return {
      foodFlag: false,
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
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
  computed: {
    needrating() {
      let arr = []
      this.food.ratings.forEach(rating => {
        if (this.onlyContent && !rating.text) {
          return
        }
        if (this.selectType === ALL || this.selectType === rating.rateType) {
          arr.push(rating)
        }
      })
      return arr
    }
  },
  filters: {
    formDate(time) {
      return moment(time).format('YYYY:MM:DD HH:mm:ss')
    }
  },
  components: {
    cartcontrol,
    split,
    ratingselect
  },
  created() {
    this.$on('show', () => {
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    })
  },
  methods: {
    tog() {
      this.onlyContent = !this.onlyContent
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    ratingType(type) {
      this.selectType = type
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    show() {
      this.foodFlag = true
      this.selectType = ALL
      this.onlyContent = true
      this.$nextTick(() => {
        this.$refs['scroll'].refresh()
      })
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
    position: relative
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
        height: 25px
        line-height: 25px
        font-size: 10px
        &.fade-enter-active, &.fade-leave-active
          transition: all 0.3s
        &.fade-enter, &.fade-leave-active
          opacity: 0
          z-index: -1
  .info
    padding: 18px
    .title
      line-height: 14px
      margin-bottom: 6px
      font-size: 14px
      color: rgb(7, 17, 27)
    .text
      line-height: 24px
      font-size: 12px
      padding: 0 8px
      color: rgb(77, 85, 93)
  .rating
    padding-top: 18px
    .title
      line-height: 14px
      margin-left: 18px
      font-size: 14px
      color: rgb(7, 17, 27)
    .rating-wrapper
      padding: 0 18px
      .rating-item
        position: relative
        padding: 16px 0
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .user
          position: absolute
          right: 0
          top: 16px
          line-height: 12px
          font-size: 0
          .name
            display: inline-block
            vertical-align: top
            margin-right: 6px
            font-size: 10px
            color: rgb(147, 153, 159)
          .avatar
            border-radius: 50%
        .time
          margin-bottom: 6px
          line-height: 12px
          font-size: 10px
          color: rgb(147, 153, 159)
        .text
          line-height: 16px
          font-size: 12px
          color: rgb(7, 17, 27)
          .icon-thumb_down, .icon-thumb_up
            margin-right: 4px
            line-height: 16px
            font-size: 12px
          .icon-thumb_up
            color: rgb(0, 160, 220)
          .icon-thumb_down
            color: rgb(147, 153, 159)
      .no-rating
        padding: 16px 0
        font-size: 12px
        color: rgb(147, 153, 159)
</style>
