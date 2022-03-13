import { useContext } from "react";
import { useTheme } from "@emotion/react";
import { TouchableOpacity } from "react-native";

import { ThemeIcon } from "./ThemeIcon";
import { Typography } from "../../atoms/Typography";
import { ServerButton } from "../../atoms/ServerButton";
import { LoadingOverlay } from "../../templates/LoadingOverlay/LoadingOverlay";
import { SummonerContext } from "../../../context/Summoner/SummonerContext";
import { servers } from "../../templates/ServerSelection/helpers";

import {
  ChangeThemeButton,
  DefaultHeader,
  HeaderContent,
  CurrentServer,
} from "./styles";

export const Header = () => {
  const { themeName, setIsDark } = useTheme();
  const { server, summonerName } = useContext(SummonerContext);
  const serverLabel = servers.find((s) => s.riot === server)?.label;

  return (
    <DefaultHeader>
      <LoadingOverlay />
      <HeaderContent>
        {serverLabel && summonerName && (
          <TouchableOpacity>
            <CurrentServer>
              <ServerButton
                style={{ transform: [{ scale: 0.75 }], marginHorizontal: -4 }}
                isSelected={false}
                onPress={() => {}}
              >
                {serverLabel}
              </ServerButton>
              <Typography variant="body-1">{summonerName}</Typography>
            </CurrentServer>
          </TouchableOpacity>
        )}
        <ChangeThemeButton onPress={() => setIsDark((t) => !t)}>
          <Typography variant="eyebrown" style={{ marginRight: 4 }}>
            {themeName === "light" ? "Solari" : "Lunari"}
          </Typography>
          <ThemeIcon themeName={themeName} />
        </ChangeThemeButton>
      </HeaderContent>
    </DefaultHeader>
  );
};
