<template>
  <div>
    <index-header></index-header>
    <index-center></index-center>
    <index-footer></index-footer>
    <back-top></back-top>
  </div>
</template>

<script  type="text/ecmascript-6">
  import indexHeader from '../components/index/header.vue'
  import indexCenter from '../components/index/section.vue'
  import indexFooter from '../components/index/footer.vue'
  import backTop from '../components/index/backTop.vue'
  import '../assets/js/jquery-1.8.3.min.js'
  import '../assets/js/index.js'
export default {
    components: {
      indexHeader,
      indexCenter,
      indexFooter,
      backTop
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/index.css";
</style>
