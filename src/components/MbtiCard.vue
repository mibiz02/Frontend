<template>
    <div class="mbti_card">
      <div class="img_box">
        <img :src="imgUrl" alt="ENFP"/>
        <div></div>
      </div>
      <div class="mbti_info">
        <h3>ENFP</h3>
        <p>ENFP</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'mbtiCard',
        data() {
            return {imgUrl: require('../assets/mbti/enfp.png')}
        }
    }
</script>

<style>
    @import '../css/MbtiCard.css';
</style>