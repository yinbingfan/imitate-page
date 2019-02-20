<template>
  <ul class="shoppClassList">
    <!--********全部********-->
    <shop-all></shop-all>
    <!--大牌特惠-->
    <shop-big></shop-big>
    <!--********下午茶********-->
    <shop-teas></shop-teas>
    <!--********商场百货********-->
    <shop-general></shop-general>
    <!--********水果生鲜********-->
    <shop-fruite></shop-fruite>
    <!--********鲜花蛋糕********-->
    <shop-flower></shop-flower>
  </ul>
</template>

<script type="text/ecmascript-6">
  import shopAll from './shopsAll.vue'
  import shopBig from './shopsBig.vue'
  import shopTeas from './shopsTeas.vue'
  import shopGeneral from './shopsGeneral.vue'
  import shopFruite from './shopsFruite.vue'
  import shopFlower from './shopsFlower.vue'
  export default {
    components: {
      shopAll,
      shopBig,
      shopTeas,
      shopGeneral,
      shopFruite,
      shopFlower
    }
  }
</script>
<style scoped>
  @import '../../assets/css/shoppingclass.css';

</style>
