<template>
    <div class="movie-cell">
        <div class="movie-img">
            <img :src="movie.poster_path" alt="" class="movie-photo"></div>
            <div class="movie-content">
                <div class="movie-title">{{movie.title}}</div>
                <div class="movie-sub-box">
                    <div class="movie-subtext">{{setMovieYear}}</div>
                    <div class="detail-genre">
                        <div class="detail-subtext">{{movie.genre_name}}</div>
                    </div>
                </div>
                <div class="movie-sub-box">
                    <div class="movie-subtext">📊
                        {{movie.vote_count}}</div>
                    <div class="movie-subtext">⭐
                        {{movie.vote_average}}
                    </div>
                </div>
                <div class="movie-overview">
                    {{movie.overview}}
                </div>
                <div class="movie-see" @click="goDetail">See The More</div>
            </div>
        </div>
    </template>

    <script>
        export default {
            name: 'MovieCard',
            props: {
                movie: Object,
                movie_pk:Number
            },
            computed: {
                setMovieYear() {
                    return this
                        .movie
                        .release_date
                        .split('-')[0]
                }
            },
            methods: {
                goDetail() {
                    this
                        .$router
                        .push({
                            name: 'movie',
                            query: {
                                id: this.movie_pk
                            }
                        })
                }
            }
        }
    </script>

    <style>
        @import '../css/MovieCard.css';
    </style>