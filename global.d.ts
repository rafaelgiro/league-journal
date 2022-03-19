type RootStackParamList = {
  FirstStep: undefined;
  SecondStep: undefined;
  ThirdStep: undefined;
  Homescreen: undefined;
  Questions: undefined;
  Reminders: undefined;
};

type SummonerId = string;
type AccountId = string;
type PUUID = string;
type Region =
  | "br1"
  | "eun1"
  | "euw1"
  | "na1"
  | "jp1"
  | "kr"
  | "la1"
  | "la2"
  | "oc1"
  | "tr1"
  | "ru";

interface Account {
  id: SummonerId;
  accountId: AccountId;
  puuid: PUUID;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

interface LiveMatch {
  gameId: number;
  mapId: number;
  gameMode: string;
  gameType: string;
  gameQueueConfigId: number;
  participants: {
    teamId: 100 | 200;
    spell1Id: number;
    spell2Id: number;
    championId: number;
    profileIconId: number;
    summonerName: string;
    bot: boolean;
    summonerId: SummonerId;
    gameCustomizationObjects: [];
    perks: {
      perkIds: number[];
      perkStyle: number;
      perkSubStyle: number;
    };
  }[];
  observers: { encryptionKey: string };
  platformId: string;
  bannedChampions: {
    championId: number;
    teamId: 100 | 200;
    pickTurn: number;
  }[];
  gameStartTime: number;
  gameLength: number;
}

interface Champion {
  name: string;
  key: string;
  id: string;
}

interface Question {
  id: number;
  isActive: boolean;
  answer?: any;
  title: string;
  type: "text" | "single-champion" | "multiple-champions" | "lane" | "yesno";
  enemyChampions?: Champion[];
  allyChampions?: Champion[];
  isPreGame: boolean;
  isPostGame: boolean;
}

interface Reminder {
  id: number;
  isActive: boolean;
  title: string;
  isPreGame: boolean;
  isPostGame: boolean;
}
