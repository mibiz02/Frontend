<template>
    <div >
        <MainNavBar/>
        <div class="view-body">
            <MainTop />
            <div id="main-characters">
                <InputMBTI />
                <CharacterList :characterList="this.mbti_list"/>
            </div>
            <div id="main-movies">
                <MovieList />
            </div>
            <div id="main-footer">
                <a href="https://cookie-biplane-8d4.notion.site/MIBIZ-c2ec7afaa27649bf8fb37eb61dce32d4" target="__blank"><img :src="require('../assets/notion.png')" alt="notion"></a>
                <a href="https://github.com/mibiz02" target="__blank"><img :src="require('../assets/git.png')"  alt="git"></a>
            </div>
        </div>
    </div>
</template>

<script>
    import MainNavBar from '../layout/MainNavBar.vue'
    import MainTop from '../layout/MainTop.vue'
    import InputMBTI from '../layout/InputMBTI.vue'
    import MovieList from '../layout/MovieList.vue'
    import CharacterList from '../layout/CharacterList.vue'

    export default {
        name: 'MainView',
        components: {
            MainNavBar,
            MainTop,
            InputMBTI,
            MovieList,
            CharacterList
        },
        data(){
            return {
                mbti_list : this.$store.state.mbti_list
            }
        }
    }
</script>

<style>
    @import '../css/Flickity.css';
    .view-body {
        padding-top: 5em;
        width: 100%;
    }
</style>