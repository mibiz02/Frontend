<template>
    <div class="detail-cell">
        <div class="movie-img">
            <img :src="movie.poster_path" alt="" class="detail-photo"></div>
            <div class="detail-content">
                <div class="detail-title">{{movie.title}}

                    <p class="movie_like" v-if="this.isLike" @click="like">🖤</p>
                    <p class="movie_like" v-if="!this.isLike" @click="like">🧡</p>

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
                    <div class="detail-subtext">🧡 :
                        {{movie.movie_like_users}}</div>
                </div>
                <div class="detail-overview">
                    {{movie.overview}}
                </div>
            </div>
        </div>
    </template>

    <script>
        export default {
            name: 'MovieCard',
            props: {
                movie: Object
            },
            data() {
                return {
                    isLike : true
                }
            },
            computed: {},
            methods: {
                like() {
                    this.isLike = !this.isLike
                }
            }
        }
    </script>

    <style>
        @import '../css/MovieCard.css';
    </style>