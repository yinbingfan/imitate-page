<template>
  <div class="swiper-container">
    <div class="swiper-wrapper wrap">
      <a class="swiper-slide sildetab active" href="#">全部</a>
      <a class="swiper-slide sildetab " href="#">大牌特惠</a>
      <a class="swiper-slide sildetab" href="#">下午茶不贵</a>
      <a class="swiper-slide sildetab" href="#">商场百货</a>
      <a class="swiper-slide sildetab" href="#">生鲜水果</a>
      <a class="swiper-slide sildetab" href="#">鲜花蛋糕</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted(){
      const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
      })
    }
  }
</script>
<style scoped>
  @import '../../assets/css/shoppingclass.css';

</style>
