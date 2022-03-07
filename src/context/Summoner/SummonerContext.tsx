import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

interface SummonerContextProps {
  summonerName: string;
  setSummonerName: Dispatch<SetStateAction<string>>;
  server: Region;
  setServer: Dispatch<SetStateAction<Region>>;
}

export const SummonerContext = createContext<SummonerContextProps>({
  summonerName: "",
  setSummonerName: () => "",
  server: "br1",
  setServer: () => "",
});

export const SummonerProvider: FC = (props) => {
  const [server, setServer] = useState<Region>("br1");
  const [summonerName, setSummonerName] = useState("");

  return (
    <SummonerContext.Provider
      value={{ server, setServer, summonerName, setSummonerName }}
      {...props}
    />
  );
};
