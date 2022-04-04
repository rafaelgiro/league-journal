import { useCallback, useContext, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';

import { Typography } from '../../atoms/Typography';
import { UIContext } from '../../../context/UI/UIContext';
import { EmptyHistory } from './EmptyHistory';
import { Match } from './Match';

import { MatchHistoryContainer } from './styles';

export const MatchHistory = () => {
  const [history, setHistory] = useState<SavedMatch[]>([]);
  const { showError } = useContext(UIContext);

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        try {
          const jsonValue = await AsyncStorage.getItem('matches');
          if (jsonValue && jsonValue !== '[]')
            setHistory(JSON.parse(jsonValue));
        } catch (_) {
          showError('Erro ao carregar o histórico de partidas');
        }
      }

      getData();
    }, [setHistory])
  );

  return (
    <MatchHistoryContainer>
      <Typography variant="title-2" style={{ textDecorationLine: 'underline' }}>
        PARTIDAS RECENTES
      </Typography>
      <ScrollView horizontal>
        {history.length ? (
          history
            .slice(0, 4)
            .map((m, i) => (
              <Match
                key={`${m.date}-${i}`}
                championId={m.championId}
                date={m.date}
                summonerName={m.summonerName}
              />
            ))
        ) : (
          <EmptyHistory />
        )}
      </ScrollView>
    </MatchHistoryContainer>
  );
};
