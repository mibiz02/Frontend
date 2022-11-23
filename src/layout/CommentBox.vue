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
            movie_id: String,
            mbti: String,
            type: String
        },
        data() {
            return {bubbles: []}
        },
        computed: {},
        methods: {
            enterComment(e) {
                const content = e.target.value
                const token = this.$store.state.token;
                const url = (this.type === 'movies')
                    ? `${API_URL}/movies/${this.movie_id}/comment`
                    : `${API_URL}/mbti_compabilities/type/${this.mbti}/comment`

                    axios({
                        method: 'POST',
                        url: url,
                        data: {
                            content
                        },
                        headers: {
                            Authorization: `Token ${token}`
                        }
                    })
                    .then(res => {
                        this
                            .bubbles
                            .push(res.data)
                    })
                    .catch(err => console.log(err));
                document
                    .querySelector('input')
                    .value = ''
            },
            getComments() {
                const url = (this.type === 'movies')
                    ? `${API_URL}/movies/${this.movie_id}/this_comments`
                    : `${API_URL}/mbti_compabilities/type/${this.mbti}/this_comments`;

                console.log(url)
                axios
                    .get(url)
                    .then(res => {
                        console.log(res)
                        this.bubbles = res.data
                        console.log(this.bubbles)
                    })
                    .catch(err => console.log(err))
                }
        },
        created() {
            console.log("HIHIHI")
            this.getComments()
            console.log("BYEBYEBYE")
        }
    }
</script>

<style>
    @import '../css/CommentBox.css';
</style>