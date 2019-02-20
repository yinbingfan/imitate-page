<template>
  <section>
    <ul class="payRelated">
      <li class="payRelated_item">在线支付</li>
      <li class="payRelated_item">
        <label for="anonym">匿名购买</label>
        <input type="checkbox" id="anonym" class="checkBoxClass">
      </li>
      <li class="payRelated_item remark">
        <span>口味偏好/餐具份数</span>
        <div class="environment">
          <img class="environmentLogo" src="../../assets/images/img_yxz/environment.png" alt="">
          <span>无餐具 更环保</span>
          <img src="../../assets/images/img_yxz/enter3.png" alt="">
        </div>
      </li>
      <taste-check></taste-check>
      <li class="payRelated_item">
        <label for="paper">不需要发票</label>
        <input type="checkbox" id="paper" class="checkBoxClass" checked>
      </li>
    </ul>
  </section>
</template>

<script  type="text/ecmascript-6">
import tasteCheck from './tasteCheck.vue'
export default {
  components: {
    tasteCheck
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/goodsCartPay.css";
</style>
