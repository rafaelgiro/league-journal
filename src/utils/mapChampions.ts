/**
 * find champion data based on champions currently on the game
 */
export async function mapChampions(participants: LiveMatch["participants"]) {
  const patchRes = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const patches = await patchRes.json();

  const championsRes = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${patches[0]}/data/en_US/champion.json`
  );
  const allChampions = await championsRes.json();

  const championsKeysInGame = participants.map((part) => part.championId);
  const champions = Object.values(allChampions.data) as Champion[];

  return champions
    .filter((champ) => championsKeysInGame.includes(Number(champ.key)))
    .map((champ) => ({ id: champ.id, key: champ.key, name: champ.name }));
}
