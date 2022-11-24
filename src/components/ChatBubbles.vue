<template>
    <div class="talk-bubble tri-right round right-in">
        <div class="talktext">
            <div>
                <p>{{content.nickname}}</p>
                <p :style='getStyle' class="comments_mbti">{{content.MBTI_type}}</p>
            </div>
            <p class="comment_text">{{content.content}}</p>
            <!-- <p class="comment_like" v-if="this.isLike" @click="like">🖤</p>
            <p class="comment_like" v-if="!this.isLike" @click="like">🧡</p> -->
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
            getStyle() {
                return mbtiStyle(this.content.MBTI_type.toUpperCase())
            }
        }, 
        methods:{
            like() {
                this.isLike = !this.isLike
            }
        }
    }
</script>

<style>
.comments_mbti {
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.comment_text {
    padding-bottom: 1em;
}
</style>