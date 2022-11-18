<template>
    <div class="movie-cell">
        <div class="movie-img">
            <img
                :src="movie.poster_path"
                alt=""
                class="movie-photo"></div>
            <div class="movie-content">
                <div class="movie-title">{{movie.title}}</div>
                <div class="movie-sub-box">
                    <div class="movie-subtext">{{setMovieYear}}</div>
                    <div class="movie-subtext genre" v-for="genre in movie.genre_name" v-bind:key="genre">{{genre}}</div>
                </div>
                <div class="movie-sub-box">
                    <div class="movie-subtext">📊 {{movie.vote_count}}</div>
                    <div class="movie-subtext">⭐ {{movie.vote_average}}
                    </div>
                </div>
                <div class="movie-overview">
                    {{movie.overview}}
                </div>
                <div class="movie-see">See The Book</div>
            </div>
        </div>
    </template>

    <script>
        export default {
            name:'MovieCard',
            props:{
                movie : Object
            },
            computed : {
                setMovieYear() {
                    return this.movie.release_date.split('-')[0]
                }
            }
        }
    </script>

    <style>
        @import '../css/MovieCard.css';
    </style>