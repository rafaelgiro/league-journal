import { useTheme } from "@emotion/react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";

import { Typography } from "../../components/atoms/Typography";
import { MatchHistory } from "../../components/templates/MatchHistory";
import { SavedItems } from "../../components/templates/SavedItems";
import { Wrapper } from "../../components/templates/Wrapper";
import { SummonerContext } from "../../context/Summoner/SummonerContext";
import { UIContext } from "../../context/UI/UIContext";
import { findMatch } from "../../utils/findMatch";

import { FindGame, HomeContainer } from "./styles";

export const Homescreen = () => {
  const theme = useTheme();
  const { server, summonerName } = useContext(SummonerContext);
  const { setIsLoading } = useContext(UIContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  async function handleFindGame() {
    if (summonerName) {
      setIsLoading({ open: true, text: "Procurando partida..." });
      try {
        const match = await findMatch(summonerName, server);
        const { allyChampions, enemyChampions } = match.champions;
        navigation.navigate("Questions", {
          allyChampions,
          enemyChampions,
          isAnswering: true,
        });
      } catch (error) {
        // todo: error reading value
      } finally {
        setIsLoading({ open: false, text: "" });
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
