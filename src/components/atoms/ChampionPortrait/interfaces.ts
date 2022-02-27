export interface ChampionPortraitProps {
  championName: string;
  championId: string;
  isActive?: boolean;
  handlePress?: (championId: string) => void;
}
