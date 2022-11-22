<template>
  <div class="__input_box comment_box">
        <div class="__comment">
            <ChatBubble v-for="bubble in bubbles" v-bind:key="bubble.id" :context="bubble.context"/>
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
    data() {
        return {
            bubbles : []
        }
    },
    methods:{
        enterComment(e) {
            this.bubbles.push({id : this.bubbles.length, context : e.target.value})
            document.querySelector('input').value = ''
        }
    }
}
</script>

<style>
@import '../css/CommentBox.css';
</style>