<template>
  <section>
    <div class="swiper-container swiper-container1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul class="slide_top">
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/d1890cf73ae6f2adb97caa39de7fcjpeg.PNG" alt="">
                <span>美食</span>
              </a>
            </li>
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/696aa5cf9820adada9b11a3d14bf5jpeg.PNG" alt="">
                <span>甜品饮品</span>
              </a>
            </li>
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/0184f5b3fa72f295fc01864734218jpeg.PNG" alt="">
                <span>商超便利</span>
              </a>
            </li>
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/7757ff22e8ab28e7dfa5f7e2c2692jpeg.PNG" alt="">
                <span>预订早餐</span>
              </a>
            </li>
          </ul>
          <ul class="slide_bottom">
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/d20d49e5029281b9b73db1c5ec6f9jpeg.PNG" alt="">
                <span>果蔬生鲜</span>
              </a>
            </li>
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/d41b04d520d445dc5de42dae9a384jpeg.PNG" alt="">
                <span>新店特惠</span>
              </a>
            </li>
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/02b72b5e63c127d5bfae57b8e4ab1jpeg.PNG" alt="">
                <span>大牌必吃</span>
              </a>
            </li>
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/244241b514affc0f12f4168cf6628jpeg.PNG" alt="">
                <span>晚餐</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul class="slide_top">
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/c888acb2c8ba9e0c813f36ec9e90ajpeg.PNG" alt="">
                <span>浪漫鲜花</span>
              </a>
            </li>
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/58aa34ef194d216c9f2328f603588jpeg.PNG" alt="">
                <span>医药健康</span>
              </a>
            </li>
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/432619fb21a40b05cd25d11eca02djpeg.PNG" alt="">
                <span>汉堡薯条</span>
              </a>
            </li>
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/244241b514affc0f12f4168cf6628jpeg.PNG" alt="">
                <span>包子粥店</span>
              </a>
            </li>
          </ul>
          <ul class="slide_bottom">
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/ec21096d528b7cfd23cdd894f01c6jpeg.PNG" alt="">
                <span>地方菜系</span>
              </a>
            </li>
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/235761e50d391445f021922b71789jpeg.PNG" alt="">
                <span>披萨意面</span>
              </a>
            </li>
            <li>
              <a class="slide_item" href="#">
                <img src="../../assets/images/img_yxz/a9ef469a12e7a596b559145b87f09jpeg.PNG" alt="">
                <span>麻辣烫</span>
              </a>
            </li>
            <li>
              <a class="slide_item" style="visibility: hidden" href="#">
                <img src="../../assets/images/img_yxz/d1890cf73ae6f2adb97caa39de7fcjpeg.PNG" alt="">
                <span>美食</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'bannerSwiper',
  mounted () {
    var mySwiper = new Swiper('.swiper-container1', {
      loop: true,
      autoplay: 2000,
      pagination: '.swiper-pagination'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/index.css";
</style>
