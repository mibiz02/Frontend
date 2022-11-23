<template>
    <div id="error">
        <div>D</div>
        <div>N</div>
        <div>U</div>
        <div>O</div>
        <div>F</div>
        <div>T</div>
        <div>O</div>
        <div>N</div>
        <div>4</div>
        <div>0</div>
        <div>4</div>
    </div>
</template>

<script>
    export default {name: 'ErrorView'}
</script>

<style>
    body {
        background: #000;
    }

    #error {
        position: absolute;
        width: 600px;
        height: 36px;
        left: 50%;
        top: 40%;
        margin-left: -300px;
        overflow: visible;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
    }

    #error div {
        font-family: 'LeferiPoint-WhiteObliqueA';
        position: absolute;
        width: 20px;
        height: 36px;
        opacity: 0;
        animation: move 2s linear infinite;
        -o-animation: move 2s linear infinite;
        -moz-animation: move 2s linear infinite;
        -webkit-animation: move 2s linear infinite;
        transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        color: #35C4F0;
    }

    #error div:nth-child(2) {
        animation-delay: 0.2s;
        -o-animation-delay: 0.2s;
        -moz-animation-delay: 0.2s;
        -webkit-animation-delay: 0.2s;
    }
    #error div:nth-child(3) {
        animation-delay: 0.4s;
        -o-animation-delay: 0.4s;
        -webkit-animation-delay: 0.4s;
        -webkit-animation-delay: 0.4s;
    }
    #error div:nth-child(4) {
        animation-delay: 0.6s;
        -o-animation-delay: 0.6s;
        -moz-animation-delay: 0.6s;
        -webkit-animation-delay: 0.6s;
    }
    #error div:nth-child(5) {
        animation-delay: 0.8s;
        -o-animation-delay: 0.8s;
        -moz-animation-delay: 0.8s;
        -webkit-animation-delay: 0.8s;
    }
    #error div:nth-child(6) {
        animation-delay: 1s;
        -o-animation-delay: 1s;
        -moz-animation-delay: 1s;
        -webkit-animation-delay: 1s;
    }
    #error div:nth-child(7) {
        animation-delay: 1.2s;
        -o-animation-delay: 1.2s;
        -moz-animation-delay: 1.2s;
        -webkit-animation-delay: 1.2s;
    }

    @keyframes move {
        0% {
            left: 0;
            opacity: 0;
        }
        35% {
            left: 41%;
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }
        65% {
            left: 59%;
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }
        100% {
            left: 100%;
            -moz-transform: rotate(-180deg);
            -webkit-transform: rotate(-180deg);
            -o-transform: rotate(-180deg);
            transform: rotate(-180deg);
            opacity: 0;
        }
    }

    @-moz-keyframes move {
        0% {
            left: 0;
            opacity: 0;
        }
        35% {
            left: 41%;
            -moz-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }
        65% {
            left: 59%;
            -moz-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }
        100% {
            left: 100%;
            -moz-transform: rotate(-180deg);
            transform: rotate(-180deg);
            opacity: 0;
        }
    }

    @-webkit-keyframes move {
        0% {
            left: 0;
            opacity: 0;
        }
        35% {
            left: 41%;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }
        65% {
            left: 59%;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }
        100% {
            left: 100%;
            -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg);
            opacity: 0;
        }
    }

    @-o-keyframes move {
        0% {
            left: 0;
            opacity: 0;
        }
        35% {
            left: 41%;
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }
        65% {
            left: 59%;
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }
        100% {
            left: 100%;
            -o-transform: rotate(-180deg);
            transform: rotate(-180deg);
            opacity: 0;
        }
    }
</style>