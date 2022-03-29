import Constants from "expo-constants";

export async function findMatch(summonerName: string, region: Region) {
  if (Constants.manifest?.extra?.apiUrl) {
    const match = await fetch(
      `${Constants.manifest.extra.apiUrl}/match/live?summonerName=${summonerName}&region=${region}`
    );

    return match.json();
  }
}
