<template>
    <div  id="compatibility-page" class="container">
        <h1 :style="style">{{this.mbti}}</h1>
    </div>
</template>

<script>
    import {mbtiStyle} from '../store/api.js';

    export default {
        name: 'CompatibilityTop',
        data() {
            return {mbti: this.$store.state.mbti}
        },
        computed: {
            style() {
                return mbtiStyle(this.mbti)
            }
        },
        methods: {}
    }
</script>

<style>
@import '../css/CompatibilityTop.css';
</style>