<template>
    <div>
        {{getData()}}
        <SignNavBar />
        <MovieDetail :movie="this.$store.state.movie"/>
        <CompatibilityList title="등장하는"/>
    </div>
</template>

<script>
  import MovieDetail from '../components/MovieDetail';
  import SignNavBar from '../layout/SignNavBar';
  import CompatibilityList from '../layout/CompatibilityList'

  export default {
      name: 'movieView',
      components:{
        MovieDetail,
        SignNavBar,
        CompatibilityList
      },
      methods: {
          getData() {
              this.$store.dispatch('GET_MOVIE_DATA', this.$route.query.id)
          }
      }
  }
</script>

<style></style>