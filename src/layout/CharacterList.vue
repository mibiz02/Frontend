<template>
    <div class="container">
        <div class="movie_list_title">
            <h1 :style="getStyle">캐릭터 MBTI</h1>
            <h1>로 보는 영화</h1>
        </div>
        <flickity class="flickity_character" ref="flickity" :options="flickityOptions">
            <CharacterCard character_mbti="intj" />
            <CharacterCard character_mbti="intp" />
            <CharacterCard character_mbti="entj" />
            <CharacterCard character_mbti="entp" />
            <CharacterCard character_mbti="infj" />
            <CharacterCard character_mbti="infp" />
            <CharacterCard character_mbti="enfj" />
            <CharacterCard character_mbti="enfp" />
            <CharacterCard character_mbti="istj" />
            <CharacterCard character_mbti="isfj" />
            <CharacterCard character_mbti="estj" />
            <CharacterCard character_mbti="esfj" />
            <CharacterCard character_mbti="istp" />
            <CharacterCard character_mbti="isfp" />
            <CharacterCard character_mbti="estp" />
            <CharacterCard character_mbti="esfp" />
        </flickity>
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
        data() {
            return {
                flickityOptions: {
                    initialIndex: 3,
                    prevNextButtons: true,
                    wrapAround: true,
                    freeScroll: true
                    // any options from Flickity can be used
                }
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