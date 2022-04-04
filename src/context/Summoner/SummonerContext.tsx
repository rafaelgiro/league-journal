import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UIContext } from '../UI/UIContext';

interface SummonerContextProps {
  summonerName?: string;
  setSummonerName: Dispatch<SetStateAction<string | undefined>>;
  server: Region;
  setServer: Dispatch<SetStateAction<Region>>;
}

export const SummonerContext = createContext<SummonerContextProps>({
  summonerName: '',
  setSummonerName: () => '',
  server: 'br1',
  setServer: () => ''
});

export const SummonerProvider: FC = (props) => {
  const [server, setServer] = useState<Region>('br1');
  const [summonerName, setSummonerName] = useState<string>();
  const { showError } = useContext(UIContext);

  useEffect(() => {
    async function saveSummoner() {
      try {
        const newValue = JSON.stringify({ server, summonerName });
        await AsyncStorage.setItem('summoner', newValue);
      } catch (_) {
        showError('Erro ao salvar informações de invocador');
      }
    }

    if (server && summonerName) saveSummoner();
  }, [server, summonerName]);

  useEffect(() => {
    async function loadSummoner() {
      try {
        const value = await AsyncStorage.getItem('summoner');

        if (value) {
          const localSummoner = JSON.parse(value);
          setServer(localSummoner.server);
          setSummonerName(localSummoner.summonerName);
        }
      } catch (_) {
        showError('Erro ao carregar informações de invocador');
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
