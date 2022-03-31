export interface HeaderProps {
  isIntro?: boolean;
  backButton?: boolean;
  homeButton?: boolean;
}

export interface HeaderActionProps extends HeaderProps {
  summonerName?: string;
  serverLabel?: string;
}
