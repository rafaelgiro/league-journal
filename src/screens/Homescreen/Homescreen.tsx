import { useTheme } from "@emotion/react";
import { Typography } from "../../components/atoms/Typography";
import { MatchHistory } from "../../components/templates/MatchHistory";
import { SavedItems } from "../../components/templates/SavedItems";
import { Wrapper } from "../../components/templates/Wrapper";
import { FindGame, HomeContainer } from "./styles";

export const Homescreen = () => {
  const theme = useTheme();
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
