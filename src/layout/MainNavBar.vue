<template>
    <nav id="main-nav-bar">
        <div id="logo">MOVIZ</div>
        <ul>
            <li>
                <a href="#main-page">main</a>
            </li>
            <li>
                <a href="#main-characters">characters</a>
            </li>
            <li>
                <a href="#main-movies">movies</a>
            </li>
        </ul>
        <div>Team.</div>
    </nav>
</template>

<script>
    export default {}
</script>

<style>
    #main-nav-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        width: 80%;
    }

    #main-nav-bar ul {
        padding: 0;
        margin:0;
        display: flex;
        justify-content: center;
        gap : 3vw;
        list-style-type: none;
    }

    #main-nav-bar ul li a{
        font-family: 'LeferiPoint-WhiteObliqueA';
        font-size : 1.5em;
        text-decoration: none;
    }

    #logo {
        font-family: 'SBAggroB';
        font-size : 1.5em;
    }
</style>