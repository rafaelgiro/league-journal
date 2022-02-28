import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@emotion/react";

import { AddButtonProps } from "./interfaces";

export const AddButton = (props: AddButtonProps) => {
  const { handlePress, ...rest } = props;
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={handlePress} {...rest}>
      <Svg width="65" height="65" viewBox="0 0 65 65" fill="none">
        <Path
          d="M2 17.1282C2 7.04706 7.04706 2 17.1282 2M17.1282 2C24.1682 2 31.2082 2 47.3718 2H17.1282ZM47.3718 2C57.4529 2 62.5 7.04706 62.5 17.1282L47.3718 2ZM62.5 17.1282C62.5 26.6012 62.5 36.0871 62.5 47.3718V17.1282ZM62.5 47.3718C62.5 57.4529 57.4529 62.5 47.3718 62.5L62.5 47.3718ZM47.3718 62.5C35.6341 62.5 23.8835 62.5 17.1282 62.5H47.3718ZM17.1282 62.5C7.04706 62.5 2 57.4529 2 47.3718L17.1282 62.5ZM2 47.3718C2 39.2706 2 31.1694 2 17.1282V47.3718Z"
          stroke={theme.colors.text}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="16, 20"
        />
        <Path
          d="M30.6274 24C31.0942 29.0691 31.2474 32.3367 31.8674 39.5721M30.7879 25.5244C31.8017 29.711 30.1242 34.5759 31.9111 39.9951L30.7879 25.5244Z"
          stroke={theme.colors.text}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <Path
          d="M24.5077 33C28.2879 32.6067 33.4302 32.9298 40 32.2765M23 32.4521C27.6033 32.2906 32.6654 31.4969 39.1041 32.4943L23 32.4521Z"
          stroke={theme.colors.text}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};
