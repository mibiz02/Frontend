<template>
    <nav id="main-nav-bar">
        <router-link to="/main">
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
        <div class="__go_sign" v-if="!isLogined">
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
        </div>
        <div class="__go_sign" v-if="isLogined">
            <router-link to="/mypage">MyPage</router-link>
            <div @click="logout">Logout</div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'mainNavBar',
        computed: {
            isLogined() {
                return this.$store.getters.isLogin
            }
        },
        methods: {
            logout() {
                this.$store.commit('SAVE_TOKEN', '')
            }
        }
    }
</script>

<style>
    @import '../css/MainNavBar.css';
</style>