<template>
  <!---------------------送达时间选择器----------------------->
  <div class="sendTime_select">
    <div class="sendTime_select_header">选择送达时间</div>
    <div class="sendTime_select_container">
      <div class="Time_tab">
        <span class="week">今日(周五)</span>
      </div>
      <ul class="Time_list">
        <li>
          <span class="time">尽快送达 | 预计18:45</span><span class="sendPrice">(3.5元配送费)</span>
          <span class="selectedBtn"><img src="../../assets/images/img_yxz/selected.png" alt=""></span>
        </li>
        <li>
          <span class="time">19:00</span><span class="sendPrice">(3.5元配送费)</span>
        </li>
        <li>
          <span class="time">19:15</span><span class="sendPrice">(3.5元配送费)</span>
        </li>
        <li>
          <span class="time">19:30</span><span class="sendPrice">(3.5元配送费)</span>
        </li>
        <li>
          <span class="time">19:45</span><span class="sendPrice">(3.5元配送费)</span>
        </li>
        <li>
          <span class="time">20:00</span><span class="sendPrice">(3.5元配送费)</span>
        </li>
        <li>
          <span class="time">20:15</span><span class="sendPrice">(3.5元配送费)</span>
        </li>
        <li>
          <span class="time">20:30</span><span class="sendPrice">(3.5元配送费)</span>
        </li>
        <li>
          <span class="time">20:45</span><span class="sendPrice">(3.5元配送费)</span>
        </li>
      </ul>
    </div>
  </div>
  <!---------------------送达时间选择器结束----------------------->
</template>

<script  type="text/ecmascript-6">
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/goodsCartPay.js'
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/goodsCartPay.css";
</style>
