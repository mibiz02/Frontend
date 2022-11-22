<template>
  <div>
    <SignNavBar />
    <MyPageTop />
  </div>
</template>

<script>
import MyPageTop from '../layout/MyPageTop.vue'
import SignNavBar from '../layout/SignNavBar.vue'

export default {
  name : 'MyPageView',
  components : {
    MyPageTop,
    SignNavBar
  }
}
</script>

<style>

</style>