<template>
  <div class="goods">
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav
        :data="goods"
        :options="scrollOptions"
        :side="true"
        v-if="goods && goods.length"
      >
        <template slot="bar" slot-scope="props">
          <cube-scroll-nav-bar
            :current="props.current"
            :labels="props.labels"
            :txts="txtBar"
            direction="vertical"
          >
            <template slot-scope="props">
              <div class="text">
                <supportico v-if="props.txt.type>=1" :size="3" :type="props.txt.type"></supportico>
                <span>{{props.txt.name}}</span>
                <span class="num" v-if="props.txt.count">{{props.txt.count}}</span>
              </div>
            </template>
          </cube-scroll-nav-bar>
        </template>
        <cube-scroll-nav-panel
          :key="good.name"
          :label="good.name"
          :title="good.name"
          v-for="good in goods"
        >
          <ul>
            <li
              :key="food.name"
              @click="selectFood(food)"
              class="food-item"
              v-for="(food) in good.foods"
            >
              <div class="icon">
                <img v-lazy="food.icon" height="57" width="57" />
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cart-control-wrapper">
                  <cartcontrol :food="food" @cartAdd="cartAdd"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
    <div class="shop-cart-wrapper">
      <shopcar :seller="seller" :goods="goods" ref="shopcar"></shopcar>
    </div>
  </div>
</template>

<script>
import { getGoods } from '../../api/index'
import shopcar from '../shop-car/shop-car'
import cartcontrol from '../cart-control/cart-control'
import supportico from '../support-ico/support-ico'
export default {
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      goods: [],
      scrollOptions: {
        click: false,
        directionLockThreshold: 0
      },
      selectedFood: {} // 点击的food
    }
  },
  computed: {
    txtBar() {
      let ret = []
      this.goods.forEach(good => {
        const { type, name, foods } = good
        let count = 0
        foods.forEach(food => {
          count += food.count || 0
        })
        ret.push({
          name,
          type,
          count
        })
      })
      return ret
    }
  },
  components: {
    shopcar,
    cartcontrol,
    supportico
  },
  created() {
    this._Getgoods()
  },
  methods: {
    _Getgoods() {
      getGoods().then(res => {
        this.goods = res
      })
    },
    selectFood(food) {
      this.selectedFood = food
      this.foodComp = this.$createFood({
        $props: {
          food: 'selectedFood'
        },
        $events: {
          leave: () => {
            this._hideShopCartList()
          },
          add: el => {
            console.log(el)
            this.shopCartStickyComp.drop(el)
          }
        }
      })
      this.foodComp.show()
      this._showShopCarSticky()
    },
    _showShopCarSticky() {
      this.shopCartStickyComp =
        this.shopCartStickyComp ||
        this.$createShopCartSticky({
          $props: {
            seller: 'seller',
            goods: 'goods',
            fold: true
          }
        })
      this.shopCartStickyComp.show()
    },
    _hideShopCartList() {
      this.shopCartStickyComp.hide()
    },
    cartAdd(el) {
      this.$refs['shopcar'].drop(el)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
@import '../../common/stylus/variable'
.goods
  position: relative
  text-align: left
  height: 100%
  .scroll-nav-wrapper
    position: absolute
    width: 100%
    top: 0
    left: 0
    bottom: 48px
  >>> .cube-scroll-nav-bar
    width: 80px
    white-space: normal
    overflow: hidden
  >>> .cube-scroll-nav-bar-item
    padding: 0 10px
    display: flex
    align-items: center
    height: 56px
    line-height: 14px
    font-size: $fontsize-small
    background: $color-background-ssss
    .text
      flex: 1
      position: relative
    .num
      position: absolute
      right: -8px
      top: -10px
      display: inline-block
      padding: 0 5px
      height: 16px
      line-height: 16px
      text-align: center
      border-radius: 16px
      font-family: Helvetica
      font-weight: 700
      font-size: $fontsize-small-s
      color: $color-white
      background: linear-gradient(to right, $color-orange, $color-red)
    .support-ico
      display: inline-block
      vertical-align: top
      margin-right: 4px
  >>> .cube-scroll-nav-bar-item_active
    background: $color-white
    color: $color-dark-grey
  >>> .cube-scroll-nav-panel-title
    padding-left: 14px
    height: 26px
    line-height: 26px
    border-left: 2px solid $color-col-line
    font-size: $fontsize-small
    color: $color-grey
    background: $color-background-ssss
  .food-item
    display: flex
    margin: 18px
    padding-bottom: 18px
    position: relative
    &:last-child
      border-none()
      margin-bottom: 0
    .icon
      flex: 0 0 57px
      margin-right: 10px
      img
        height: auto
    .content
      flex: 1
      .name
        margin: 2px 0 8px 0
        height: 14px
        line-height: 14px
        font-size: $fontsize-medium
        color: $color-dark-grey
      .desc, .extra
        line-height: 10px
        font-size: $fontsize-small-s
        color: $color-light-grey
      .desc
        line-height: 12px
        margin-bottom: 8px
      .extra
        .count
          margin-right: 12px
      .price
        font-weight: 700
        line-height: 24px
        .now
          margin-right: 8px
          font-size: $fontsize-medium
          color: $color-red
        .old
          text-decoration: line-through
          font-size: $fontsize-small-s
          color: $color-light-grey
    .cart-control-wrapper
      position: absolute
      right: 0
      bottom: 12px
  .shop-cart-wrapper
    position: absolute
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
</style>
