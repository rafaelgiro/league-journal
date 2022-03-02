/**
 * Get account match history on Riot API
 * @param accountId account ID returned from getAccountData
 * @param region region that the account is used
 */
export async function getHistory(
  accountId: AccountId,
  region: Region
): Promise<Account> {
  const res = await fetch(
    `https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY!,
      },
    }
  );

  return res.json();
}
