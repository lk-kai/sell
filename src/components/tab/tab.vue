<template>
  <div class="tab">
    <cube-tab-bar
      :data="tabs"
      :showSlider="true"
      ref="tabBar"
      v-model="selectedLabel"
    ></cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :auto-play="false"
        :initial-index="index"
        :loop="false"
        :options="slideOptions"
        :show-dots="false"
        @change="onChange"
        @scroll="onScroll"
        ref="slide"
      >
        <cube-slide-item>
          <goods></goods>
        </cube-slide-item>
        <cube-slide-item>
          <ratings></ratings>
        </cube-slide-item>
        <cube-slide-item>
          <seller></seller>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>
<script>
import goods from '../goods/goods'
import ratings from '../ratings/ratings'
import seller from '../seller/seller'
export default {
  data() {
    return {
      index: 0,
      tabs: [
        {
          label: '商品'
        },
        {
          label: '评价'
        },
        {
          label: '商家'
        }
      ],
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  mounted() {
    this.onChange(this.index)
  },
  methods: {
    onScroll(pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const transform = (-pos.x / slideWidth) * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    },
    onChange(current) {
      this.index = current
      // console.log(current)
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newVal) {
        this.index = this.tabs.findIndex(value => {
          return value.label === newVal
        })
      }
    }
  },
  components: {
    goods,
    ratings,
    seller
  }
}
</script>
<style lang="stylus" scoped>
.tab
  >>> .cube-tab
    padding: 10px 0
  display: flex
  flex-direction: column
  height: 100%
  .slide-wrapper
    flex: 1
    overflow: hidden
</style>
