<template>
  <div class="container">
    <CompatibilityTitle :title="title" />   
    <div class="compatibility_list">
        <ul class="auto-grid" role="list">
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
        list : Array
    },
    components : {
        CompatibilityTitle,
        CompatibilityCard
    },
    methods : {
    }
}
</script>

<style>
@import '../css/CompatibilityList.css';
</style>