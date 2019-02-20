<template>
  <div class="keyword_box">
    <div class="swiper-container swiper-container2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="#">爆肚</a>
          <a href="#">奶茶</a>
          <a href="#">汉堡王</a>
          <a href="#">卤煮</a>
          <a href="#">好邻居</a>
          <a href="#">凉皮</a>
          <a href="#">酸辣粉</a>
          <a href="#">过桥米线</a>
          <a href="#">炸鸡</a>
          <a href="#">周黑鸭</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script  type="text/ecmascript-6">
export default {
  name: 'keyWordSwiper',
  mounted () {
    var mySwiper = new Swiper('.swiper-container2', {
      slidesPerView: 0.7,
      paginationClickable: true,
      // spaceBetween:10,
      freeMode: true,
      // loop:true,
      calculateHeight: true,
      roundLengths: true,
      cssWidthAndHeight: true,
      visiblilityFullfit: true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/index.css";
</style>
