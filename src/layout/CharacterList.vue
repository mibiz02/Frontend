<template>
    <div class="container">
        <div class="movie_list_title">
            <h1 :style="getStyle">캐릭터 MBTI</h1>
            <h1>로 보는 영화</h1>
        </div>
        <flickity class="flickity_character" ref="flickity" :options="flickityOptions">
            <CharacterCard v-for="character in characterList" v-bind:key="character.id" :character="character" />
        </flickity>
        <p class="etc_p_tag">
            🎥 'XXXX'는 아직 논의 중인 MBTI입니다
        </p>
    </div>
</template>

<script>
    import Flickity from 'vue-flickity'
    import CharacterCard from '../components/CharacterCard.vue'

    export default {
        components: {
            Flickity,
            CharacterCard
        },
        props : {
            characterList : Object
        }, 
        data() {
            return {
                flickityOptions: {
                    initialIndex: 3,
                    prevNextButtons: true,
                    wrapAround: true,
                    freeScroll: true
                },
            }
        },
        computed: {
            getStyle() {
                return this.$store.state.mbti_style
            }
        }
    }
</script>

<style>
    @import '../css/MovieList.css';
</style>