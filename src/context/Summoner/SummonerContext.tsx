import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

interface SummonerContextProps {
  summonerName: string;
  setSummonerName: Dispatch<SetStateAction<string>>;
  server: string;
  setServer: Dispatch<SetStateAction<string>>;
}

export const SummonerContext = createContext<SummonerContextProps>({
  summonerName: "",
  setSummonerName: () => "",
  server: "",
  setServer: () => "",
});

export const SummonerProvider: FC = (props) => {
  const [server, setServer] = useState("BR");
  const [summonerName, setSummonerName] = useState("");

  return (
    <SummonerContext.Provider
      value={{ server, setServer, summonerName, setSummonerName }}
      {...props}
    />
  );
};
