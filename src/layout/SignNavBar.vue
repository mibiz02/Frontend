<template>
    <nav id="sub-nav-bar">
        <router-link to="/main">
            <div id="logo">MOVIZ</div>
        </router-link>
        <ul>
            <li>
                <router-link to="/main">
                    <button class="a-button">
                        go_Main<span aria-hidden="aria-hidden">_</span>
                        <span aria-hidden="aria-hidden" class="a-button__glitch">Main_</span>
                    </button>
                </router-link>
            </li>
        </ul>
        <div>Team.MOVIZ</div>
    </nav>
</template>

<script>
    export default {}
</script>

<style>
    @import '../css/MainNavBar.css';
</style>