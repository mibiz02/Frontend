<template>
  <div class="__input_box comment_box">
        <div class="__comment">
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
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
    methods:{
        enterComment(e) {
            console.log(e.target.value)
        }
    }
}
</script>

<style>
@import '../css/CommentBox.css';
</style>