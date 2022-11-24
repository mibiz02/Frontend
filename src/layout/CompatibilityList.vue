<template>
  <div class="container">
    <CompatibilityTitle :title="title" v-if="isListBlanked" />   
    <div class="compatibility_list">
        <ul class="auto-grid" role="list" v-if="isListBlanked">
            <compatibility-card v-for="item of list" v-bind:key="item.id" :item="item"/>
        </ul>
    </div>
  </div>
</template>

<script>
import CompatibilityTitle from '../components/CompatibilityTitle.vue'
import CompatibilityCard from '../components/CompatibilityCard.vue'

export default {
    props : {
        title : String,
        list : [Object, Array]
    },
    components : {
        CompatibilityTitle,
        CompatibilityCard
    },
    computed : {
        isListBlanked() {
            return (this.list.length === 0)? false:true
        }
    }
}
</script>

<style>
@import '../css/CompatibilityList.css';
</style>