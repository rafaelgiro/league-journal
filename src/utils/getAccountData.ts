/**
 * Get account data on Riot API
 * @param summonerName nickname used on LoL
 * @param region region that the account is used
 */
export async function getAccountData(
  summonerName: string,
  region: Region
): Promise<Account> {
  const res = await fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY!,
      },
    }
  );

  return res.json();
}
