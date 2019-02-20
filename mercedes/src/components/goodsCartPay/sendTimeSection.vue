<template>
  <section class="sendTime_section">
    <div class="sendTime_show">
      <div class="sendTime">
        <div class="sendTime_top">
          <span class="weekInfo">今日(周五)</span>
          <span class="timeInfo">尽快送达[ 预计18:45 ]</span>
        </div>
        <div class="sendTime_bottom">
          <span class="deliveryWrap">蜂鸟专送</span>
          <span class="punctuality">准时达</span>
          <p>超时10分钟享赔付</p>
        </div>
      </div>
      <div class="enter"><img src="../../assets/images/img_yxz/enter2.png" alt=""></div>
    </div>
    <send-time-check></send-time-check>
  </section>
</template>

<script  type="text/ecmascript-6">
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/goodsCartPay.js'
  import sendTimeCheck from './sendTimeCheck.vue'
export default {
    components: {
      sendTimeCheck
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/goodsCartPay.css";
</style>
