<template>
    <div>
        <SignNavBar/>
        <MovieDetail :movie="this.movieData"/>
        <!-- <iframe :src="this.movieData.video_path" frameborder="0"
        allow="accelerometer; autoplay"/> -->
        <CompatibilityList title="등장하는" :list="this.characterData"/>
        <div class="comment_body">
            <CommentBox :movie_id="String($route.query.id)"/>
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
            return {movieData: {}, characterData: {}, id : this.$route.query.id}
        },
        created() {
            axios
                .get(`${API_URL}/movies/${this.id}`)
                .then(res => {
                    this.movieData = res.data
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

<style></style>