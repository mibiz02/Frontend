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
                <div class="my-title">당신이 🧡한 영화</div>
                <div v-if="isMovieBlanked" class="noList">아직 좋아요 한 영화가 없습니다</div>
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
            <div class="my-title">당신이 ✏️한 댓글</div>
            <div v-if="isCommentBlanked" class="noList">아직 쓴 댓글이 없습니다</div>
            <div v-if="!isCommentBlanked">
                <ul class="comment-grid">
                    <MyCommentBubbles
                        v-for="bubble in this.myComment"
                        v-bind:key="bubble.id"
                        :content="bubble"/>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import MyCommentBubbles from '../components/MovieCommentBubbles.vue'
    import SignNavBar from '../layout/SignNavBar.vue'
    import MyCard from '../components/MyCard.vue'
    import axios from 'axios'
    import {API_URL} from '../store/api'

    export default {
        name: 'MyPageView',
        components: {
            SignNavBar,
            MyCard,
            MyCommentBubbles
        },
        data() {
            return {myData: {}, myMovie: {}, myComment: {}}
        },
        computed: {
            isCommentBlanked() {
                return (this.myComment === [])
                    ? true
                    : false
            },
            isMovieBlanked() {
                return (this.myMovie.length === 0)
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
                        console.log(this.myMovie)
                    })
                    .catch((err) => {
                        console.log(err)
                    });

            },
            getComment() {
                axios({
                    method: 'GET',
                    url: `${API_URL}/mypage/movies/comments`,
                    headers: {
                        Authorization: `Token ${this.$store.state.token}`
                    }
                })
                    .then(res => {
                        this.myComment = res.data
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }
        },
        created() {
            this.getMypage()
            this.getMovie()
            this.getComment()
        }
    }
</script>

<style>
    @import '../css/MyPage.css';
</style>