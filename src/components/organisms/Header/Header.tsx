import { useTheme } from "@emotion/react";
import { Typography } from "../../atoms/Typography";
import { ThemeIcon } from "./ThemeIcon";

import { ChangeThemeButton, DefaultHeader } from "./styles";

export const Header = () => {
  const { themeName, setIsDark } = useTheme();
  return (
    <DefaultHeader>
      <Typography variant="label">LOGO</Typography>
      <ChangeThemeButton onPress={() => setIsDark((t) => !t)}>
        <Typography variant="eyebrown" style={{ marginRight: 4 }}>
          {themeName === "light" ? "Solari" : "Lunari"}
        </Typography>
        <ThemeIcon themeName={themeName} />
      </ChangeThemeButton>
    </DefaultHeader>
  );
};
