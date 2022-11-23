<template>
    <div>
        <SignNavBar/>
        <MovieDetail :movie="this.movieData"/>
        <CompatibilityList title="등장하는"/>
        <div class="comment_body">
            <CommentBox :movie_id="$route.query.id" />
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
            return {
                movieData : [],
                movie : {}
            }
        },
        created() {
            axios
                .get(`${API_URL}/movies/${this.$route.query.id}`)
                .then(res => {
                    this.movieData = res.data
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }
    }
</script>

<style></style>