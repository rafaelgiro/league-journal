import { useTheme } from "@emotion/react";
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

  async function handleFindGame() {
    if (summonerName) {
      setIsLoading({ open: true, text: "Procurando partida..." });
      try {
        const match = await findMatch(summonerName, server);
        console.log(match);
      } catch (error) {
        console.log(error);
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
