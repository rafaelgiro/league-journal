import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  useEffect(() => {
    async function saveSummoner() {
      try {
        const newValue = JSON.stringify({ server, summonerName });
        await AsyncStorage.setItem("summoner", newValue);
      } catch (e) {
        // error reading value
      }
    }

    if (server && summonerName) saveSummoner();
  }, [server, summonerName]);

  useEffect(() => {
    async function loadSummoner() {
      try {
        const value = await AsyncStorage.getItem("summoner");

        if (value) {
          const localSummoner = JSON.parse(value);
          setServer(localSummoner.server);
          setSummonerName(localSummoner.summonerName);
        }
      } catch (e) {
        // error reading value
      }
    }

    loadSummoner();
  }, []);

  return (
    <SummonerContext.Provider
      value={{ server, setServer, summonerName, setSummonerName }}
      {...props}
    />
  );
};
