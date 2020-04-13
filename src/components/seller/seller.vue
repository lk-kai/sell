<template>
  <div class="seller">
    <cube-scroll :options="sellerScrollOptions">
      <div class="seller-content">
        <div class="over-view">
          <h1 class="title">{{seller.name}}</h1>
          <div class="desc">
            <start class="start" :size="36" :score="seller.score"></start>
            <span class="text">({{seller.ratingCount}})</span>
            <span class="text">月售{{seller.sellCount}}单</span>
          </div>
          <ul class="remark">
            <li class="block">
              <h2>起送价</h2>
              <div class="content">
                <span class="stress">{{seller.minPrice}}</span>元
              </div>
            </li>
            <li class="block">
              <h2>商家配送</h2>
              <div class="content">
                <span class="stress">{{seller.deliveryPrice}}</span>元
              </div>
            </li>
            <li class="block">
              <h2>平均配送时间</h2>
              <div class="content">
                <span class="stress">{{seller.deliveryTime}}</span>分钟
              </div>
            </li>
          </ul>
          <div class="favorite" @click="toggleFavorite">
            <span class="icon-favorite" :class="{'active':favorite}"></span>
            <span class="text">{{favoriteText}}</span>
          </div>
        </div>
        <split></split>
        <div class="bulletin">
          <h1 class="title">公告与活动</h1>
          <div class="content-wrapper">
            <p class="content">{{seller.bulletin}}</p>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
              <supporticon :size="4" :type="item.type" class="icon"></supporticon>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
        </div>
        <split></split>
        <div class="pics">
          <h1 class="title">商家实景</h1>
          <cube-scroll class="pic-wrapper" :options="picScrollOptions" ref="scroll">
            <ul class="pic-list">
              <li class="pic-item" v-for="(pic, index) in seller.pics" :key="index">
                <img v-lazy="pic" alt width="120" height="90" />
              </li>
            </ul>
          </cube-scroll>
        </div>
        <split></split>
        <div class="info">
          <h1 class="title">商家信息</h1>
          <ul>
            <li class="info-item" v-for="(info, index) in seller.infos" :key="index">{{info}}</li>
          </ul>
        </div>
      </div>
    </cube-scroll>
  </div>
</template>

<script>
import start from '../star/star'
import split from '../split/split'
import supporticon from '../support-ico/support-ico'

export default {
  props: {
    seller: {
      type: Object,
      deafult() {
        return {}
      }
    }
  },
  computed: {
    favoriteText() {
      return this.favorite ? '已收藏' : '收藏'
    }
  },
  components: {
    start,
    split,
    supporticon
  },
  data() {
    return {
      favorite: false,
      sellerScrollOptions: {
        directionLockThreshold: 0,
        click: false
      },
      picScrollOptions: {
        scrollX: true,
        stopPropagation: true,
        directionLockThreshold: 0
      }
    }
  },
  methods: {
    toggleFavorite() {
      this.favorite = !this.favorite
    }
  }
}
</script>
<style lang="stylus">
.seller
  position: relative
  text-align: left
  white-space: normal
  height: 100%
  .over-view
    padding: 18px
    .title
      margin-bottom: 8px
      line-height: 14px
      color: rgb(7, 17, 27)
      font-size: 14px
    .desc
      padding-bottom: 18px
      font-size: 0
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      .start
        display: inline-block
        vertical-align: top
        margin-right: 8px
      .text
        display: inline-block
        line-height: 18px
        vertical-align: top
        margin-right: 12px
        font-size: 10px
        color: rgb(77, 85, 93)
    .remark
      display: flex
      padding-top: 18px
      .block
        flex: 1
        text-align: center
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        &:last-child
          border: none
        h2
          margin-bottom: 4px
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
        .content
          line-height: 24px
          font-size: 10px
          color: rgb(7, 17, 27)
          .stress
            font-size: 24px
    .favorite
      position: absolute
      right: 5px
      top: 18px
      width: 50px
      text-align: center
      .icon-favorite
        display: block
        line-height: 24px
        margin-bottom: 4px
        font-size: 24px
        color: #d4d6d9
        &.active
          color: rgb(240, 20, 20)
      .text
        line-height: 10px
        font-size: 10px
        color: rgb(77, 85, 93)
  .bulletin
    padding: 18px 18px 0 18px
    .title
      margin-bottom: 8px
      line-height: 14px
      color: rgb(7, 17, 27)
      font-size: 14px
    .content-wrapper
      padding: 0 12px 16px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      .content
        line-height: 24px
        font-size: 12px
        color: rgb(240, 20, 20)
    .supports
      .support-item
        padding: 16px 12px
        font-size: 0
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        &:last-child
          border: none
      .icon
        display: inline-block
        vertical-align: top
        margin-right: 6px
      .text
        line-height: 16px
        font-size: 12px
        color: rgb(7, 17, 27)
  .pics
    padding: 18px
    .title
      margin-bottom: 12px
      line-height: 14px
      color: rgb(7, 17, 27)
      font-size: 14px
    .pic-wrapper
      display: flex
      // width: 100%
      overflow: hidden
      white-space: nowrap
      .pic-list
        font-size: 0
        .pic-item
          display: inline-block
          margin-right: 6px
          width: 120px
          height: 90px
          &:last-child
            margin: 0
  .info
    padding: 18px 18px 0 18px
    color: rgb(7, 17, 27)
    .title
      padding-bottom: 12px
      line-height: 14px
      font-size: 14px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    .info-item
      padding: 16px 12px
      line-height: 16px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      font-size: 12px
      &:last-child
        border: 0
</style>
