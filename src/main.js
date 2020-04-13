import Vue from 'vue'
import Cube from 'cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueLazyLoad from 'vue-lazyload'
import './common/stylus/index.styl'
import './register'
Vue.config.productionTip = false
Vue.use(VueLazyLoad)
Vue.use(VueResource)
Vue.use(Cube)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
