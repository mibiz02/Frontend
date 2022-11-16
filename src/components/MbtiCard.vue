<template>
    <div class="mbti_card">
        <div class="img_box">
            <img :src="loadImg" :alt="type"/>
            <div :style="getStyle"></div>
        </div>
        <div class="mbti_info">
            <h3>{{type}}</h3>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mbtiCard',
        props: {
            type: String,
            text: String,
            imgUrl: String,
            idx: Number
        },
        computed: {
            loadImg() {
              return require(`../assets/mbti/${this.imgUrl}`)
            },
            getStyle() {
              return this.$store.state.mbti_style
            }
        },
        methods: {
          check() {
            console.log(this.style)
          }
        }
    }
</script>

<style>
    @import '../css/MbtiCard.css';
</style>