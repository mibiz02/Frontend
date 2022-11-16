<template>
  <div id = "select_mbti" class="container">
    <div id="__zone">
        <div @click="subPage" class="select_arrow">
            <img :src="previous" alt="previous"/>
        </div>
        <div id="select_zone">
            <MbtiCard v-for="item in mbti_lst[page].mbti" v-bind:key="item.name" :type="item.type" :text="item.text" :imgUrl="item.imgUrl" :idx="page"/>
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
    name : 'inputMBTI',
    components : {
        MbtiCard
    },
    data() {
        return {
            mbti_lst : this.$store.state.type_mbti,
            page : 0,
            previous : require('../assets/previous.png'),
            next : require('../assets/next.png'),
        }
    },
    methods : {
        addPage() {
            let tmp = this.page+1;
            if (tmp > 3) {
                tmp = 0;
            }
            this.page = tmp
        },
        subPage() {
            let tmp = this.page-1;
            if (tmp < 0) {
                tmp = 3;
            }
            this.page = tmp
        }
    }

}
</script>

<style>
@import '../css/InputMBTI.css';
</style>