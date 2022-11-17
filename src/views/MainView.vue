<template>
    <div >
        <MainNavBar/>
        <div class="view-body">
            <MainTop />
            <div id="main-characters">
                <InputMBTI />
            </div>
            <div id="main-movies">
                <MovieList />
            </div>
        </div>
    </div>
</template>

<script>
    import MainNavBar from '../layout/MainNavBar.vue'
    import MainTop from '../layout/MainTop.vue'
    import InputMBTI from '../layout/InputMBTI.vue'
    import MovieList from '../layout/MovieList.vue'

    export default {name: 'MainView', components: {
            MainNavBar,
            MainTop,
            InputMBTI,
            MovieList
        }}
</script>

<style>
    .view-body {
        padding-top: 5em;
        width: 100%;
    }
</style>