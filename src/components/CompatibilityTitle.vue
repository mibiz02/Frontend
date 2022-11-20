<template>
    <div class="movie_list_title">
        <h1 :style="getStyle">{{title}} </h1>
        <h1>궁합의 캐릭터들은?</h1>
    </div>
</template>

<script>
    export default {
        props:{
            title:String
        },
        computed: {
            getStyle() {
                return this.$store.state.mbti_style
            }
        }

    }
</script>

<style></style>