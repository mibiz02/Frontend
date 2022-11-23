<template>
    <div>
        <SignNavBar/>
        <MovieDetail :movie="this.movieData"/>
        <div class="movie_youtube">
            <iframe :src="this.url" frameborder="0" width="100%" height="100%"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen controls="2" loading="lazy"/>
        </div>
        <CompatibilityList title="등장하는" :list="this.characterData"/>
        <div class="comment_body">
            <CommentBox :movie_id="String($route.query.id)" type="movies"/>
        </div>
    </div>
</template>

<script>
    import MovieDetail from '../components/MovieDetail';
    import SignNavBar from '../layout/SignNavBar';
    import CompatibilityList from '../layout/CompatibilityList'
    import CommentBox from '../layout/CommentBox.vue'
    import axios from 'axios'
    import {API_URL} from '../store/api'

    export default {
        name: 'movieView',
        components: {
            MovieDetail,
            SignNavBar,
            CompatibilityList,
            CommentBox
        },
        data() {
            return {movieData: {}, characterData: {}, id : this.$route.query.id, url: ''}
        },
        created() {
            window.scrollTo(0,0);
            axios
                .get(`${API_URL}/movies/${this.id}`)
                .then(res => {
                    this.movieData = res.data,
                    this.url = `${this.movieData.video_path}?autoplay=1&mute=1`
                })
                .catch(err => console.log(err));
            axios
                .get(`${API_URL}/movies/${this.id}/character`)
                .then(res => {
                    this.characterData = res.data
                })
                .catch(err => console.log(err))
            }
    }
</script>

<style>
    .movie_youtube {
        width:80%;
        height : 50vh;
    }
</style>