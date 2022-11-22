<template>
    <div>
        <SignNavBar/>
        <MovieDetail :movie="this.$store.state.movie"/>
        <CompatibilityList title="등장하는"/>
        <div class="comment_body">
            <CommentBox/>
        </div>
    </div>
</template>

<script>
    import MovieDetail from '../components/MovieDetail';
    import SignNavBar from '../layout/SignNavBar';
    import CompatibilityList from '../layout/CompatibilityList'
    import CommentBox from '../layout/CommentBox.vue'

    export default {
        name: 'movieView',
        components: {
            MovieDetail,
            SignNavBar,
            CompatibilityList,
            CommentBox
        },
        created() {
            this
                .$store
                .dispatch('GET_MOVIE_DATA', this.$route.query.id)
        }
    }
</script>

<style></style>