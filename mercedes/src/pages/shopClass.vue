<template>
  <div>
    <goods-class-top></goods-class-top>
    <goods-class-swiper></goods-class-swiper>
    <shops-class-list></shops-class-list>
  </div>
</template>
<script type="text/ecmascript-6">
  import goodsClassTop from '../components/shoppClass/goodsClassTop.vue'
  import goodsClassSwiper from '../components/shoppClass/goodsClassSwiper'
  import shopsClassList from '../components/shoppClass/shopsClassList'
  import '../assets/js/jquery-1.8.3.min.js'
  import '../assets/js/shoppingclass.js'
  export default {
    components: {
      goodsClassTop,
      goodsClassSwiper,
      shopsClassList
    }
  }
</script>
<style scoped>

</style>
