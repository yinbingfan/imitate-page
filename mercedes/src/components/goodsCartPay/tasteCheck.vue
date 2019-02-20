<template>
  <!---------------------订单备注选择器----------------------->
  <div class="tasteCheck">
    <div class="tasteCheck_header">订单备注</div>
    <div class="tasteCheck_container">
      <div class="taste tasteCheck_container_item">
        <div class="txtHeader tasteHeader">口味偏好</div>
        <ul class="tasteCheck_uls">
          <li class="poison"><span>不要香菜 微辣</span></li>
          <li class="ice">
            <span>去冰</span> |
            <span class="active">正常</span> |
            <span>少冰</span>
          </li>
        </ul>
        <input type="text" placeholder="请输入备注内容(可不填)">
      </div>
      <div class="plateNum tasteCheck_container_item">
        <div class="txtHeader plateNumHeader">餐具份数</div>
        <ul class="plateNum_uls">
          <li class="noPlate"><span class="active">无需餐具</span></li>
          <li class="checkNum">
            <span>1</span> |
            <span>2</span> |
            <span>3</span> |
            <span>4</span> |
            <span>5</span> |
            <span>6</span> |
            <span>6份以上</span>
          </li>
        </ul>
        <div class="tasteBtn">确定</div>
      </div>
    </div>
  </div>
  <!---------------------订单备注选择器结束----------------------->
</template>

<script  type="text/ecmascript-6">
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/goodsCartPay.css";
</style>
