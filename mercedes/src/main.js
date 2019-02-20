// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/jquery-1.8.3.min.js'
import './assets/js/find.js'
import './assets/js/index.js'
import './assets/js/shoppingclass.js'
import './assets/js/goodsCartPay.js'
import './assets/js/swiper.min.js'
import './assets/css/swiper.min.css'
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
