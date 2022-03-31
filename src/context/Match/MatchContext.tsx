import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

type CurrentMatch = {
  gameId: number;
  summonerName: string;
  championId: string;
  allyChampions: Champion[];
  enemyChampions: Champion[];
};

interface MatchContextProps {
  currentMatch?: CurrentMatch;
  setCurrentMatch: Dispatch<SetStateAction<CurrentMatch | undefined>>;
}

export const MatchContext = createContext<MatchContextProps>({
  currentMatch: undefined,
  setCurrentMatch: () => undefined
});

export const MatchProvider: FC = (props) => {
  const [currentMatch, setCurrentMatch] = useState<CurrentMatch>();

  return (
    <MatchContext.Provider
      value={{ currentMatch, setCurrentMatch }}
      {...props}
    />
  );
};
