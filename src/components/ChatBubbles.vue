<template>
    <div class="talk-bubble tri-right round right-in">
        <div class="talktext">
            <div>
                <p>NickName</p>
                <p>ISFP</p>
            </div>
            <p class="comment_text">{{context}}</p>
            <p class="comment_like" v-if="this.isLike" @click="like">🖤</p>
            <p class="comment_like" v-if="!this.isLike" @click="like">🧡</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChatBubble',
        props : {
            context : String
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