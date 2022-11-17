<template>
    <div >
        <MainNavBar/>
        <div class="view-body">
            <MainTop />
            <div id="main-characters">
                <InputMBTI />
            </div>
            <div id="main-movies">
                Suggest Movie
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/></div>
        </div>
    </div>
</template>

<script>
    import MainNavBar from '../layout/MainNavBar.vue'
    import MainTop from '../layout/MainTop.vue'
    import InputMBTI from '../layout/InputMBTI.vue'

    export default {name: 'MainView', components: {
            MainNavBar,
            MainTop,
            InputMBTI
        }}
</script>

<style>
    .view-body {
        padding-top: 5em;
        width: 100%;
    }
</style>