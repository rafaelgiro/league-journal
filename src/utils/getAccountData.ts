import Constants from "expo-constants";

/**
 * Get account data on Riot API
 * @param summonerName nickname used on LoL
 * @param region region that the account is used
 */
export async function getAccountData(
  summonerName: string,
  region: Region
): Promise<Response> {
  console.log(Constants.manifest!.extra!.riotAPI);

  return fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": Constants.manifest!.extra!.riotAPI,
      },
    }
  );
}
