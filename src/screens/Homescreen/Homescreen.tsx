import { useTheme } from "@emotion/react";
import { View } from "react-native";
import { Typography } from "../../components/atoms/Typography";
import { Wrapper } from "../../components/templates/Wrapper";
import { FindGame } from "./styles";

export const Homescreen = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <View>
        <FindGame>
          <Typography
            variant="title-2"
            style={{ color: theme.colors.background }}
          >
            FIND GAME
          </Typography>
        </FindGame>
      </View>
    </Wrapper>
  );
};
