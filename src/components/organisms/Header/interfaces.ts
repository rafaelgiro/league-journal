export interface HeaderProps {
  isIntro?: boolean;
  backButton?: boolean;
}

export interface HeaderActionProps extends HeaderProps {
  summonerName?: string;
  serverLabel?: string;
}
