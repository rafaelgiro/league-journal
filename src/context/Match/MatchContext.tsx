import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

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
