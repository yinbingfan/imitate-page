<template>
  <section>
    <goods-header></goods-header>
    <goods-menu></goods-menu>
  </section>
</template>

<script  type="text/ecmascript-6">
  import goodsHeader from './goodsHeader.vue'
  import goodsMenu from './goodsMenu.vue'
export default {
    components: {
      goodsHeader,
      goodsMenu
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/goodsCartPay.css";
</style>
