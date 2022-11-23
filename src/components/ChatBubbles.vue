<template>
    <div class="talk-bubble tri-right round right-in">
        <div class="talktext">
            <div>
                <p>{{content.nickname}}</p>
                <p>{{content.MBTI_type}}</p>
            </div>
            <p class="comment_text">{{content.content}}</p>
            <p class="comment_like" v-if="this.isLike" @click="like">🖤</p>
            <p class="comment_like" v-if="!this.isLike" @click="like">🧡</p>
        </div>
    </div>
</template>

<script>
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
        methods:{
            like() {
                this.isLike = !this.isLike
            }
        }
    }
</script>

<style></style>