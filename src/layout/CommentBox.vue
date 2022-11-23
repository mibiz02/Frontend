<template>
  <div class="__input_box comment_box">
        <div class="__comment">
            <ChatBubble v-for="bubble in getCommentsList" v-bind:key="bubble.movie_id" :content="bubble"/>
        </div>
        <input type="text" placeholder="Comment" @keyup.enter="enterComment"/>
  </div>
</template>

<script>
import ChatBubble from '../components/ChatBubbles.vue'

export default {
    name:'CommentBox',
    components: {
        ChatBubble
    },
    props:{
        movie_id:Number
    },
    data() {
        return {
            bubbles : this.$store.state.comments
        }
    },
    computed : {
        getCommentsList() {
            return this.$store.getters.GET_COMMENTS
        }
    },
    methods:{
        enterComment(e) {
            const content = e.target.value
            const movie_pk = this.movie_id

            this.$store.dispatch('addComments', {content, movie_pk})
            document.querySelector('input').value = ''
        },
        getComments() {
            this.$store.dispatch('getComments', this.movie_id)
        }
    },
    created() {
        this.getComments()
    }
}
</script>

<style>
@import '../css/CommentBox.css';
</style>