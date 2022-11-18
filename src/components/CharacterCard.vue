<template>
<div class="characterCard">
    <img
        class="__movie"
        src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg"
        alt=""/>
    <img
        class="__character_profile"
        src="https://randomuser.me/api/portraits/women/63.jpg"
        alt="">
        <div class="__info">
            <div class="__name">이름이름</div>
            <div class="__mbti" :style="mbtiStyle">{{character_mbti}}</div>
            <div class="__movie_title">🎬 영화제목</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'characterCard',
        props: {
            character_mbti: String
        },
        computed: {
            mbtiStyle() {
                if (['intj', 'intp', 'entj', 'entp'].includes(this.character_mbti)) {
                    return `background-image: rgb(166,34,195);
                        background-image: linear-gradient(0deg, rgba(166,34,195,1) 0%, rgba(253,45,77,1) 100%);`
                } else if (['infj', 'infp', 'enfj', 'enfp'].includes(this.character_mbti)) {
                    return `background-image: rgb(34,193,195);
                        background-image: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);`
                } else if (['istj', 'isfj', 'estj', 'esfj'].includes(this.character_mbti)) {
                    return `background-image: rgb(34,195,161);
                        background-image: linear-gradient(0deg, rgba(34,195,161,1) 0%, rgba(45,115,253,1) 100%)`;
                } else {
                    return `background-image: rgb(232,119,52);
                        background-image: linear-gradient(0deg, rgba(232,119,52,1) 0%, rgba(253,191,45,1) 100%);`
                }
            }
        }
    }
</script>

<style>
    @import '../css/CharacterCard.css';
</style>