import Vue from 'vue'
import Router from 'vue-router'
import shopClass from '../pages/shopClass.vue'
import find from '../pages/find.vue'
import index from '../pages/index.vue'
import goodsCartPay from '../pages/goodsCartPay.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/goodsCartPay',
      component: goodsCartPay
    },
    {
      path: '/shopClass',
      component: shopClass
    },
    {
      path: '/find',
      component: find
    }
  ]
})
