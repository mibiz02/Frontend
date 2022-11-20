<template>
    <div id="compatibility_view">
        <SignNavBar/>
        <div class="detail_view">
            <div>
                <div class="detail-body">
                    <CompatibilityTop/>
                    <div class="__list">
                        <CharacterList :characterList="this.character_list"/>
                    </div>
                    <CompatibilityList title="좋은" :list="this.good_list"/>
                    <CompatibilityList title="나쁜" :list="this.bad_list"/>
                </div>
            </div>
            <div class="comment_body">
                <CommentBox />
            </div>
        </div>
    </div>
</template>

<script>
    import SignNavBar from '../layout/SignNavBar.vue'
    import CompatibilityTop from '../layout/CompatibilityTop.vue'
    import CharacterList from '../layout/CharacterList.vue'
    import CompatibilityList from '../layout/CompatibilityList.vue'
    import CommentBox from '../layout/CommentBox.vue'

    export default {
        name: 'CompatiblityView',
        components: {
            SignNavBar,
            CompatibilityTop,
            CharacterList,
            CompatibilityList,
            CommentBox
        },
        data() {
            return {mbti: this.$store.state.mbti, character_list: this.$store.state.character_list, good_list: this.$store.state.good_list, bad_list: this.$store.state.bad_list}
        },
        created() {
            this
                .$store
                .dispatch('GET_CHARACTER_LIST', this.mbti);
            this
                .$store
                .dispatch('GET_GOOD_LIST', this.mbti.toUpperCase());
            this
                .$store
                .dispatch('GET_BAD_LIST', this.mbti.toUpperCase());
        }
    }
</script>

<style></style>