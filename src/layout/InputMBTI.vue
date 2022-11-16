<template>
    <div id="select_mbti" class="container">
        <div class="select_title">
            <div class="go_link">
                <a>MBTI 검사하러 가기</a>
                <p>❗검사는 총 50문항으로 20분 가량 소요됩니다</p>
            </div>
            <div class="title">
                <h1>보고싶은
                    <p :style="getStyle">MBTI</p>를 선택하세요</h1>
            </div>
        </div>
        <div id="__zone">
            <div @click="subPage" class="select_arrow">
                <img :src="previous" alt="previous"/>
            </div>
            <div id="select_zone">
                <MbtiCard
                    v-for="item in mbti_lst[page].mbti"
                    v-bind:key="item.name"
                    :type="item.type"
                    :text="item.text"
                    :imgUrl="item.imgUrl"
                    :idx="page"/>
            </div>
            <div @click="addPage" class="select_arrow">
                <img :src="next" alt="next"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MbtiCard from '../components/MbtiCard.vue';
    export default {
        name: 'inputMBTI',
        components: {
            MbtiCard
        },
        data() {
            return {mbti_lst: this.$store.state.type_mbti, page: 0, previous: require('../assets/previous.png'), next: require('../assets/next.png'), style: this.$store.state.mbti_style}
        },
        computed: {
            getStyle() {
                return this.$store.state.mbti_style
            }
        },
        methods: {
            addPage() {
                let tmp = this.page + 1;
                if (tmp > 3) {
                    tmp = 0;
                }
                this.page = tmp
                this
                    .$store
                    .commit('setStyle', this.page)
            },
            subPage() {
                let tmp = this.page - 1;
                if (tmp < 0) {
                    tmp = 3;
                }
                this.page = tmp
                this
                    .$store
                    .commit('setStyle', this.page)
            }
        }

    }
</script>

<style>
    @import '../css/InputMBTI.css';
</style>