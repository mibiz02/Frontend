<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name:'app',
  components:{
  }
}
</script>

<style>
@import './css/Font.css';

body {
  
}

#app{
  padding: 3vh 10%;
  display: flex;
  justify-content: center;
  background-color : #000;
}
</style>
