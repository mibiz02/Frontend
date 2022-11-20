<template>
    <div>
        <SignNavBar/>
        <div class="view-body">
            <CompatibilityTop/>
            <div>
            <CharacterList :characterList="this.character_list"/>
            </div>
        </div>
    </div>
</template>

<script>
    import SignNavBar from '../layout/SignNavBar.vue'
    import CompatibilityTop from '../layout/CompatibilityTop.vue'
    import CharacterList from '../layout/CharacterList.vue'

    export default {
        name: 'CompatiblityView',
        components: {
            SignNavBar,
            CompatibilityTop,
            CharacterList
        },
        data() {
          return {
            mbti : this.$store.state.mbti,
            character_list : this.$store.state.character_list
          }
        },
        created() {
            this
                .$store
                .dispatch('GET_CHARACTER_LIST', this.mbti)
        }
    }
</script>

<style></style>