<template>
    <nav id="main-nav-bar">
        <router-link to="/">
            <div id="logo">MOVIZ</div>
        </router-link>
        <ul>
            <li>
                <a href="#main-page">
                    <button class="a-button">
                        Main<span aria-hidden="aria-hidden">_</span>
                        <span aria-hidden="aria-hidden" class="a-button__glitch">Main_</span>
                    </button>
                </a>
            </li>
            <li>
                <a href="#main-characters">
                    <button class="a-button">
                        Character<span aria-hidden="aria-hidden">_</span>
                        <span aria-hidden="aria-hidden" class="a-button__glitch">Character_</span>
                    </button>
                </a>
            </li>
            <li>
                <a href="#main-movies">
                    <button class="a-button">
                        Movies<span aria-hidden="aria-hidden">_</span>
                        <span aria-hidden="aria-hidden" class="a-button__glitch">Movies_</span>
                    </button>
                </a>
            </li>
        </ul>
        <div class="__go_sign">
            <router-link to="/login" >Login</router-link>
            <router-link to="/register" >Register</router-link>
        </div>

    </nav>
</template>

<script>
    export default {}
</script>

<style>
    @import '../css/MainNavBar.css';
</style>