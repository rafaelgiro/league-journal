import { useTheme } from "@emotion/react";
import { useContext } from "react";

import { Typography } from "../../components/atoms/Typography";
import { MatchHistory } from "../../components/templates/MatchHistory";
import { SavedItems } from "../../components/templates/SavedItems";
import { Wrapper } from "../../components/templates/Wrapper";
import { SummonerContext } from "../../context/Summoner/SummonerContext";

import { FindGame, HomeContainer } from "./styles";

export const Homescreen = () => {
  const theme = useTheme();
  const { server, summonerName } = useContext(SummonerContext);

  return (
    <Wrapper>
      <HomeContainer>
        <FindGame>
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
