<template>
    <div class="talk-bubble tri-right round right-in" @click="moveMovie">
        <div class="talktext">
            <div>
                <p>{{content.movie_title}}</p>
            </div>
            <p class="comment_text">{{content.content}}</p>
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
.comments_mbti {
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.comment_text {
    padding-bottom: 1em;
}
</style>