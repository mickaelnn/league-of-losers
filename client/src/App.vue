<template>
  <div>
    {{ getSummonerData({ summoner: state.summoner }) }}
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "App",

  data() {
    return {
      state: {
        summoner: "AL4N",
      },
    };
  },

  methods: {
    getSummonerData({ summoner }) {
      //TODO get user data!
      return summoner;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
