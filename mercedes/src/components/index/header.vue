<template>
  <div>
    <header-weather></header-weather>
    <header-search-link></header-search-link>
    <key-word-swiper></key-word-swiper>
  </div>
</template>

<script  type="text/ecmascript-6">
  import headerWeather from './headerWeather.vue'
  import headerSearchLink from './headerSearchLink.vue'
  import keyWordSwiper from './keyWordSwiper.vue'
//  import '../../assets/js/jquery-1.8.3.min.js'
//  import '../../assets/js/index.js'
export default {
    components: {
      headerWeather,
      headerSearchLink,
      keyWordSwiper
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/index.css";
</style>
