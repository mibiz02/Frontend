<template>
    <div class="mbti_card">
        <div class="img_box">
            <img :src="loadImg" :alt="type"/>
            <div :style="setStyle"></div>
        </div>
        <div class="mbti_info">
            <h3>{{type}}</h3>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mbtiCard',
        props: {
            type: String,
            text: String,
            imgUrl: String,
            idx: Number
        },
        computed: {
            loadImg() {
                return require(`../assets/mbti/${this.imgUrl}`)
            },
            setStyle() {
                let style = ''

                switch (this.idx) {
                    case 0:
                        style = ` background-image: rgb(166,34,195);
                                  background-image: linear-gradient(0deg, rgba(166,34,195,1) 0%, rgba(253,45,77,1) 100%);`
                        break;
                    case 1:
                        style = ` background-image: rgb(34,193,195);
                                  background-image: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);`
                        break;
                    case 2:
                        style = ` background-image: rgb(34,195,161);
                                  background-image: linear-gradient(0deg, rgba(34,195,161,1) 0%, rgba(45,115,253,1) 100%)`;
                        break;
                    case 3:
                        style = ` background-image: rgb(232,119,52);
                                  background-image: linear-gradient(0deg, rgba(232,119,52,1) 0%, rgba(253,191,45,1) 100%);`
                        break;
                }

                return style
            }
        }
    }
</script>

<style>
    @import '../css/MbtiCard.css';
</style>