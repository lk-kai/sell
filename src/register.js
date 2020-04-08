import { createAPI } from 'cube-ui'
import Vue from 'vue'
import Food from './components/food/food'
import ShopCartList from './components/shop-cart-list/shop-cart-list'
import ShopCartSticky from './components/shop-cart-sticky/shop-cart-sticky'
createAPI(Vue, Food)
createAPI(Vue, ShopCartList)
createAPI(Vue, ShopCartSticky)
