import axios from 'axios';

export const get = async event => {
  const { summonerName } = event.pathParameters;

  const summoner = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-612346e8-30ab-4d73-bdc1-27a5149f1f92`);

  //fazer req riot api
  return {
    statusCode: 200,
    body: JSON.stringify({
      summoner: summoner.data,
    }),
  };
};
