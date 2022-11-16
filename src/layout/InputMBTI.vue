<template>
  <div id = "select_mbti" class="container">
    <MbtiCard />
    <MbtiCard />
    <MbtiCard />
    <MbtiCard />
    <MbtiCard />
    <MbtiCard />
  </div>
</template>

<script>
import MbtiCard from '../components/MbtiCard.vue';
export default { 
    name : 'inputMBTI',
    components : {
        MbtiCard
    }

}
</script>

<style>
@import '../css/InputMBTI.css';
</style>