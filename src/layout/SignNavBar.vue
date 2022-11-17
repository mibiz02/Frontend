<template>
    <nav id="main-nav-bar">
        <router-link to="/">
            <div id="logo">MOVIZ</div>
        </router-link>
        <ul>
            <li>
                <router-link to="/">
                    <button class="a-button">
                        Main<span aria-hidden="aria-hidden">_</span>
                        <span aria-hidden="aria-hidden" class="a-button__glitch">Main_</span>
                    </button>
                </router-link>
            </li>
        </ul>
        <div>Team.</div>
    </nav>
</template>

<script>
    export default {}
</script>

<style>
    @import '../css/MainNavBar.css';
</style>