<template>
    <div class="talk-bubble tri-right round right-in" @click="moveMovie">
        <div class="talktext">
            <div>
                <p :style="style" class="mbti_type">{{content.mbti_page}}</p>
            </div>
            <p class="comment_text">{{content.content}}</p>
        </div>
    </div>
</template>

<script>
    import {mbtiStyle} from '../store/api'

    export default {
        name: 'ChatBubble',
        props : {
            content : Object
        },
        data() {
            return {
                isLike : true
            }
        },
        computed : {
            style() {
                return (mbtiStyle(this.content.mbti_page))
            }
        },
        methods : {
            moveMovie() {
                this
                    .$router
                    .push({
                        name: 'movie',
                        query: {
                            id: this.content.movie
                        }
                    })
            }
        }
    }
</script>

<style>
.comment_text {
    padding-bottom: 1em;
}
</style>