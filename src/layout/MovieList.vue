<template>
    <div class="container">
        <div class="movie_list_title">
            <h1 :style="getStyle">많은 사람</h1>
            <h1>들이 선택한 영화</h1>
        </div>
        <flickity
            class="flickity_movie_list"
            ref="flickity"
            :options="flickityOptions">
            <MovieCard/>
            <MovieCard/><MovieCard/><MovieCard/><MovieCard/>
        </flickity>
    </div>
</template>

<script>
    import Flickity from 'vue-flickity'
    import MovieCard from '../components/MovieCard.vue'

    export default {
        components: {
            Flickity,
            MovieCard
        },
        data() {
            return {
                flickityOptions: {
                    initialIndex: 3,
                    prevNextButtons: true,
                    wrapAround: true,
                    freeScroll: true,
                    autoPlay: 2000
                    // any options from Flickity can be used
                }
            }
        },
        computed: {
            getStyle() {
                return this.$store.state.mbti_style
            }
        },
    }
</script>

<style>
    @import '../css/MovieList.css';
</style>