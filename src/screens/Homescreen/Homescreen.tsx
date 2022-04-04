import { useTheme } from '@emotion/react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useContext } from 'react';

import { Typography } from '../../components/atoms/Typography';
import { MatchHistory } from '../../components/templates/MatchHistory';
import { SavedItems } from '../../components/templates/SavedItems';
import { Wrapper } from '../../components/templates/Wrapper';
import { MatchContext } from '../../context/Match/MatchContext';
import { SummonerContext } from '../../context/Summoner/SummonerContext';
import { UIContext } from '../../context/UI/UIContext';
import { findMatch } from '../../utils/findMatch';

import { FindGame, HomeContainer } from './styles';

export const Homescreen = () => {
  const theme = useTheme();
  const { server, summonerName } = useContext(SummonerContext);
  const { setIsLoading, showAPIError } = useContext(UIContext);
  const { setCurrentMatch } = useContext(MatchContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  async function handleFindGame() {
    if (summonerName) {
      setIsLoading({ open: true, text: 'Procurando partida...' });
      try {
        const match = await findMatch(summonerName, server);
        if (match.code) throw new Error(match.code);

        const { allyChampions, enemyChampions } = match.champions as {
          allyChampions: Champion[];
          enemyChampions: Champion[];
        };
        const { name } = match.account;
        const { gameId } = match.match;
        const championId = allyChampions.find((a: Champion) => a.isMe)!.id;

        setCurrentMatch({
          allyChampions,
          championId,
          enemyChampions,
          gameId,
          summonerName: name
        });

        navigation.navigate('Questions', {
          allyChampions,
          enemyChampions,
          isAnswering: true
        });
      } catch (error: any) {
        showAPIError(error.toString().replace('Error: ', ''));
      } finally {
        setIsLoading({ open: false, text: '' });
      }
    }
  }

  return (
    <Wrapper>
      <HomeContainer>
        <FindGame onPress={handleFindGame}>
          <Typography
            variant="title-2"
            style={{ color: theme.colors.background }}
          >
            ENCONTRAR PARTIDA
          </Typography>
        </FindGame>
        <MatchHistory />
        <SavedItems />
      </HomeContainer>
    </Wrapper>
  );
};
