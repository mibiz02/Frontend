<template>
    <div class="__input_box comment_box">
        <div class="__comment">
            <ChatBubble
                v-for="bubble in bubbles"
                v-bind:key="bubble.movie_id"
                :content="bubble"/>
        </div>
        <input type="text" placeholder="Comment" @keyup.enter="enterComment"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import ChatBubble from '../components/ChatBubbles.vue'
    import {API_URL} from '../store/api'

    export default {
        name: 'CommentBox',
        components: {
            ChatBubble
        },
        props: {
            movie_id: Number
        },
        data() {
            return {bubbles: []}
        },
        computed: {},
        methods: {
            enterComment(e) {
                const content = e.target.value
                const token = this.$store.state.token;
                axios({
                    method: 'POST',
                    url: `${API_URL}/movies/${this.movie_id}/comments`,
                    data: {
                        content
                    },
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })
                    .then(res => {
                        this.bubbles.push(res.data)
                    })
                    .catch(err => console.log(err));
                document
                    .querySelector('input')
                    .value = ''
            },
            getComments() {
                    axios.get(`${API_URL}/movies/${this.movie_id}/this_comments`)
                    .then(res => {
                        this.bubbles = res.data
                    })
                    .catch(err => console.log(err))
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