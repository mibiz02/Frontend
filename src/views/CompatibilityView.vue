<template>
    <div id="compatibility_view">
        <SignNavBar/>
        <div class="detail_view">
            <div>
                <div class="detail-body">
                    <compatibility-top :mbti="this.mbti" />
                    <div class="__list">
                        <character-list :characterList="this.$store.state.character_list" />
                    </div>
                    <compatibility-list title="좋은 궁합의" :list="this.$store.state.good_list" />
                    <compatibility-list title="나쁜 궁합의" :list="this.$store.state.bad_list" />
                </div>
            </div>
        </div>
        <div class="comment_body">
                <CommentBox :mbti="this.mbti" type="mbtis" />
            </div>
    </div>
</template>

<script>
    import CompatibilityTop from '../layout/CompatibilityTop.vue'
    import CharacterList from '../layout/CharacterList.vue'
    import SignNavBar from '../layout/SignNavBar.vue'
    import CompatibilityList from '../layout/CompatibilityList.vue'
    import CommentBox from '../layout/CommentBox.vue'

    export default {
        name: 'CompatibilityView',
        data() {
            return {
                mbti : this.$route.query.mbti
            }
        },
        components: {
            CompatibilityTop,
            CharacterList,
            SignNavBar,
            CompatibilityList,
            CommentBox
        },
        created() {
            window.scrollTo(0,0)
        }
    }
</script>

<style></style>