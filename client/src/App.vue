<template>
  <div>
    <div style="display: flex; flex-direction: column;">
      <div>
        <p>Digite seu nick:</p>
        <input type="text" v-model="state.summonerName" />
        <button @click="getSummonerData({ summonerName: state.summonerName })">
          Pesquisar
        </button>
      </div>
      <div>
        <template v-if="state.summonerData.icon">
          <img
            :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${state.summonerData.icon}.jpg`"
            alt=""
          />
        </template>
        <template v-if="state.summonerData.level">
          {{ state.summonerData.level }}
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",

  data() {
    return {
      state: {
        summonerName: "",
        summonerData: {
          icon: "",
          level: null,
        },
      },
    };
  },
  //TODO input vue para pegar nick, botão de pesquisar e pegar icone
  methods: {
    async getSummonerData({ summonerName }) {
      console.log("passa aqi!");
      const summonerData = (
        await axios.get(`http://localhost:3000/summoner/${summonerName}`)
      ).data.summoner;
      console.log(summonerData);

      this.$set(this.state.summonerData, "icon", summonerData.profileIconId);
      this.$set(this.state.summonerData, "level", summonerData.summonerLevel);
      console.log(this.state);
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
