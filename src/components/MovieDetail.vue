<template>
    <div class="detail-cell">
        <div class="movie-img">
            <img :src="movie.poster_path" alt="" class="detail-photo"></div>
            <div class="detail-content">
                <div class="detail-title">

                    <p class="movie_like" v-if="!this.isLike" @click="like">🖤</p>
                    <p class="movie_like" v-if="this.isLike" @click="like">🧡</p>
                    {{movie.title}}
                </div>
                <div class="detail-sub-box">
                    <div class="detail-subtext">{{movie.release_date}}</div>
                    <div class="detail-genre">
                        <div class="detail-subtext">{{movie.genre_name}}</div>
                    </div>
                    <div class="detail-subtext">popularity :
                        {{movie.popularity}}</div>
                    <div class="detail-subtext">vote average :
                        {{movie.vote_average}}</div>
                    <div class="detail-subtext">vote count :
                        {{movie.vote_count}}</div>
                </div>
                <div class="detail-overview">
                    {{movie.overview}}
                </div>
            </div>
        </div>
    </template>

    <script>
        import axios from 'axios';
        import {API_URL} from '../store/api';

        export default {
            name: 'MovieCard',
            props: {
                movie: Object,
                movie_pk: [Number, String]
            },
            data() {
                return {isLike: null}
            },
            methods: {
                like() {
                    axios({
                        method: 'POST',
                        url: `${API_URL}/movies/${this.movie_pk}/like`,
                        headers: {
                            Authorization: `Token ${this.$store.state.token}`
                        },
                        data: {
                            is_liked: !this.isLike
                        }
                    })
                        .then(() => {
                            console.log('post')
                            this.isLike = !this
                                .isLike
                                console
                                .log(this.isLike)
                        })
                        .catch(err => {
                            if (err.response.status === 401) {
                                alert('회원만 이용할 수 있는 기능입니다')
                            }
                        });
                }
            },
            created() {
                axios({
                    method: 'GET',
                    url: `${API_URL}/movies/${this.movie_pk}/is_liked`,
                    headers: {
                        Authorization: `Token ${this.$store.state.token}`
                    }
                })
                    .then((res) => {
                        console.log('before created', res.data.is_liked)
                        this.isLike = res
                            .data
                            .is_liked
                            console
                            .log('created', this.isLike)
                    })
                    .catch(err => console.log(err))
                }
        }
    </script>

    <style>
        @import '../css/MovieCard.css';
    </style>