/**
 * Get live game from riot API
 * @param summonerId encrypted summoner ID returned from getAccountData
 * @param region region that the account is used
 */
export async function getLiveMatch(
  summonerId: SummonerId,
  region: Region
): Promise<LiveMatch> {
  const res = await fetch(
    `https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY!,
      },
    }
  );

  return res.json();
}
