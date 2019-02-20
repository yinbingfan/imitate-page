<template>
  <div>
    <find-header></find-header>
    <find-disclose></find-disclose>
    <find-banner></find-banner>
    <find-food></find-food>
    <find-day></find-day>
    <find-ever></find-ever>
    <find-footer></find-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import findHeader from '../components/find/findHeader'
  import findFooter from '../components/find/findFooter'
  import findDisclose from '../components/find/findDisclose'
  import findBanner from '../components/find/findBanner'
  import findFood from '../components/find/findFood'
  import findDay from '../components/find/findDay'
  import findEver from '../components/find/findEver'
  import '../assets/js/jquery-1.8.3.min.js'
  import '../assets/js/find.js'
  export default {
    components: {
      findHeader,
      findBanner,
      findDisclose,
      findFood,
      findDay,
      findEver,
      findFooter
    }
  }
</script>
<style scoped>
  @import '../assets/css/find.css';
</style>
