<template>
    <div>
        <SignNavBar/>
        <div id="my-page-top">
            <div id="container">
                You're
                <div id="flip">
                    <div>
                        <div>{{this.myData.nickname}}
                        </div>
                    </div>
                    <div>
                        <div>{{this.myData.MBTI_type}}</div>
                    </div>
                    <div>
                        <div>{{this.myData.email}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="my-movie">
                <div class="my-title">λΉμ μ΄ π§‘ν μν</div>
                <div v-if="isMovieBlanked" class="noList">μμ§ μ’μμ ν μνκ° μμ΅λλ€</div>
                <div class="my_movie_container" v-if="!isMovieBlanked">
                    <MyCard
                        v-for="movie in myMovie"
                        :data-image="movie.poster_path"
                        :movie_id="movie.id"
                        v-bind:key="movie.id">
                        <h1 slot="header">{{movie.title}}</h1>
                    </MyCard>
                </div>
            </div>
        </div>

        <div class="my-movie">
            <div class="my-title">λΉμ μ΄ βοΈν λκΈ</div>
            <div class="my-title">π¬</div>
            <div v-if="isMovieCommentBlanked" class="noList">μμ§ μ΄ λκΈμ΄ μμ΅λλ€</div>
            <div v-if="!isMovieCommentBlanked">
                <ul class="comment-grid">
                    <MovieCommentBubbles
                        v-for="bubble in this.myMovieComment"
                        v-bind:key="bubble.id"
                        :content="bubble"/>
                </ul>
            </div>
            <div class="my-title">πΆ</div>
            <div v-if="isMbtiCommentBlanked" class="noList">μμ§ μ΄ λκΈμ΄ μμ΅λλ€</div>
            <div v-if="!isMbtiCommentBlanked">
                <ul class="comment-grid">
                    <MbtiCommentBubbles
                        v-for="bubble in this.myMbtiComment"
                        v-bind:key="bubble.id"
                        :content="bubble"/>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import MovieCommentBubbles from '../components/MovieCommentBubbles.vue'
    import MbtiCommentBubbles from '../components/MbtiCommentBubbles.vue'
    import SignNavBar from '../layout/SignNavBar.vue'
    import MyCard from '../components/MyCard.vue'
    import axios from 'axios'
    import {API_URL} from '../store/api'

    export default {
        name: 'MyPageView',
        components: {
            SignNavBar,
            MyCard,
            MovieCommentBubbles,
            MbtiCommentBubbles
        },
        data() {
            return {myData: {}, myMovie: {}, myMovieComment: {}, myMbtiComment:{}}
        },
        computed: {
            isMovieCommentBlanked() {
                return (this.myMovieComment.length === 0)
                    ? true
                    : false
            },
            isMovieBlanked() {
                return (this.myMovie.length === 0)
                    ? true
                    : false
            },
            isMbtiCommentBlanked() {
              return (this.myMbtiComment.length === 0)
                    ? true
                    : false
            }
        },
        methods: {
            getMypage() {
                axios({
                    method: 'GET',
                    url: `${API_URL}/mypage/`,
                    headers: {
                        Authorization: `Token ${this.$store.state.token}`
                    }
                })
                    .then(res => {
                        this.myData = res.data
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            },
            getMovie() {
                axios({
                    method: 'GET',
                    url: `${API_URL}/mypage/like/movies`,
                    headers: {
                        Authorization: `Token ${this.$store.state.token}`
                    }
                })
                    .then(res => {
                        this.myMovie = res.data
                    })
                    .catch((err) => {
                        console.log(err)
                    });

            },
            getMovieComment() {
                axios({
                    method: 'GET',
                    url: `${API_URL}/mypage/movies/comments`,
                    headers: {
                        Authorization: `Token ${this.$store.state.token}`
                    }
                })
                    .then(res => {
                        this.myMovieComment = res.data
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            },
            getMbtiComment() {
                axios({
                    method: 'GET',
                    url: `${API_URL}/mypage/mbti_type/comments`,
                    headers: {
                        Authorization: `Token ${this.$store.state.token}`
                    }
                })
                    .then(res => {
                        this.myMbtiComment = res.data
                        console.log(this.myMbtiComment)
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }
        },
        created() {
            window.scrollTo(0,0);
            this.getMypage()
            this.getMovie()
            this.getMovieComment()
            this.getMbtiComment()
        }
    }
</script>

<style>
    @import '../css/MyPage.css';
</style>