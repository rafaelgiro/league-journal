import Constants from 'expo-constants';

export function getAccount(summonerName: string, region: Region) {
  if (Constants.manifest?.extra?.apiUrl) {
    return fetch(
      `${Constants.manifest.extra.apiUrl}/summoner?summonerName=${summonerName}&region=${region}`
    );
  }
}
