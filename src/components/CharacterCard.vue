<template>
    <div class="characterCard">
        <img
            class="__movie"
            src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg"
            alt=""/>
        <img
            class="__character_profile"
            :src="character.character_img_path"
            alt="" />
            <div class="__info">
                <div class="__name">{{character.character_name}}</div>
                <div class="__mbti" :style="style">{{character.character_MBTI_type}}</div>
                <div class="__movie_title">🎬 {{character.original_movie_title}}</div>
            </div>
        </div>
    </template>

    <script>
        import {mbtiStyle} from '../store/api.js'

        export default {
            name: 'characterCard',
            props: {
                character: Object
            },
            computed: {
                style() {
                    if(this.character.character_MBTI_type === 'XXXX') {
                        return `background-image: rgb(112,112,112);
                        background-image: linear-gradient(0deg, rgba(112,112,112,1) 0%, rgba(23,23,23,1) 100%);`
                    } else {
                        return mbtiStyle(this.character.character_MBTI_type)
                    }
                }
            }
        }
    </script>

    <style>
        @import '../css/CharacterCard.css';
    </style>