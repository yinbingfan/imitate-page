<template>
  <!--天天特价-->
  <div class="fineFood">
    <find-top></find-top>
    <div class="fineFoodBootom">
     <find-list></find-list>
      <find-list></find-list>
      <find-list></find-list>
    </div>
    <find-mind-bottom></find-mind-bottom>
  </div>
</template>

<script type="text/ecmascript-6">
  import findTop from './foodTop.vue'
  import findList from './foodList.vue'
  import findMindBottom from './foodMindBottom.vue'
  export default {
    components: {
      findTop,
      findList,
      findMindBottom
    }
  }
</script>
<style scoped>
  @import '../../assets/css/find.css';

</style>
