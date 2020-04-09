<template>
  <cube-scroll ref="scroll" class="ratings" :options="scrollOptions">
    <div class="ratings-content">
      <div class="overview">
        <div class="left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}</div>
        </div>
        <div class="right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <start class="start" :size="36" :score="seller.serviceScore"></start>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商家评分</span>
            <start class="start" :size="36" :score="seller.foodScore"></start>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery-time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect
        :ratings="ratings"
        :selectType="selectType"
        :desc="desc"
        :onlyContent="onlyContent"
        @ratingType="ratingType"
        @tog="tog"
      ></ratingselect>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating, index) in needrating" :key="index">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar" alt />
            </div>
            <div class="contont">
              <h1 class="name">{{rating.username}}</h1>
              <div class="start-wrapper">
                <start class="start" :size="24" :score="rating.score"></start>
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{item}}</span>
              </div>
              <div class="time">{{rating.rateTime | formDate }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </cube-scroll>
</template>

<script>
import { getRatings } from '../../api/index'
import start from '../star/star'
import split from '../split/split'
import ratingselect from '../ratingselect/ratingselect'
import moment from 'moment'
const ALL = 2
export default {
  props: {
    seller: {
      type: Object,
      deafult() {
        return {}
      }
    }
  },
  components: {
    start,
    split,
    ratingselect
  },
  data() {
    return {
      ratings: [],
      scrollOptions: {
        click: false,
        directionLockThreshold: 0
      },
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  created() {
    this._getRatings()
  },
  computed: {
    needrating() {
      let arr = []
      this.ratings.forEach(rating => {
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
  methods: {
    _getRatings() {
      getRatings().then(res => {
        this.ratings = res
      })
    },
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
    }
  },
  filters: {
    formDate(time) {
      return moment(time).format('YYYY:MM:DD HH:mm:ss')
    }
  }
}
</script>
<style lang="stylus" scoped>
.ratings
  position: relative
  text-align: left
  white-space: normal
  height: 100%
  .overview
    display: flex
    padding: 18px
    .left
      flex: 0 0 137px
      width: 137px
      border-right: 1px solid rgba(7, 17, 27, 0, 1)
      text-align: center
      .score
        padding-top: 6px
        margin-bottom: 6px
        fonr-size: 24px
        line-height: 28px
        color: rgb(255, 153, 0)
      .title
        margin-bottom: 8px
        line-height: 12px
        font-size: 12px
        color: rgb(7, 17, 27)
      .rank
        padding-bottom: 6pxx
        line-height: 10px
        font-size: 10px
        color: rgb(147, 153, 159)
    .right
      flex: 1
      padding-top: 6px
      padding-left: 24px
      .score-wrapper
        margin-bottom: 8px
        font-size: 0
        .title
          line-height: 18px
          display: inline-block
          vertical-align: top
          font-size: 12px
          color: rgb(7, 17, 27)
        .start
          display: inline-block
          vertical-align: top
          margin: 0 6px
        .score
          line-height: 18px
          display: inline-block
          vertical-align: top
          font-size: 12px
          color: rgb(255, 153, 0)
      .delivery-wrapper
        font-size: 0
        .title
          line-height: 18px
          font-size: 12px
          color: rgb(7, 17, 27)
        .delivery
          font-size: 12px
          color: rgb(147, 153, 159)
          margin-left: 12px
  .rating-wrapper
    padding: 0 18px
    .rating-item
      display: flex
      padding: 18px 0
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      .avatar
        flex: 0 0 28px
        width: 28px
        margin-right: 12px
        img
          border-radius: 50%
      .contont
        position: relative
        flex: 1
        .name
          line-height: 12px
          font-size: 10px
          color: rgb(7, 17, 27)
          margin-bottom: 4px
        .start-wrapper
          margin-bottom: 6px
          font-size: 0
          .start
            margin-right: 6px
            display: inline-block
            vertical-align: top
          .delivery
            display: inline-block
            vertical-align: top
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
        .text
          margin-bottom: 8px
          line-height: 18px
          color: rgb(7, 17, 27)
          font-size: 12px
        .recommend
          line-height: 16px
          font-size: 0
          .icon-thumb_up, .item
            display: inline-block
            margin: 0 8px 4px 0
            font-size: 9px
          .icon-thumb_up
            color: rgb(0, 160, 220)
          .item
            padding: 0 6px
            border: 1px solid rgba(7, 17, 27, 0.1)
            border-radius: 1px
            color: rgb(147, 153, 159)
            background-color: #fff
        .time
          position: absolute
          top: 0
          right: 0
          line-height: 12px
          font-size: 10px
          color: rgb(147, 153, 159)
</style>
