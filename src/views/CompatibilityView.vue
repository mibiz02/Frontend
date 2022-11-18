<template>
  <div>
    <SignNavBar />
    <div class="view-body">
      <CompatibilityTop />
    </div>
  </div>
</template>

<script>
import SignNavBar from '../layout/SignNavBar.vue'
import CompatibilityTop from '../layout/CompatibilityTop.vue'

export default {
  name : 'CompatiblityView',
  components : {
    SignNavBar,
    CompatibilityTop
  }
}
</script>

<style>

</style>