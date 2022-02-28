import Svg, { Path } from "react-native-svg";
import { useTheme } from "@emotion/react";

import { YesNoButtonProps } from "./interfaces";
import { YesNoButtonContainer } from "./styles";
import { Typography } from "../Typography";

export const YesNoButton = (props: YesNoButtonProps) => {
  const { handlePress, type, isChecked, ...rest } = props;
  const theme = useTheme();

  return (
    <YesNoButtonContainer {...rest} onPress={() => handlePress(type)}>
      <Svg
        width="61"
        height="38"
        viewBox="0 0 61 38"
        fill="none"
        style={{ position: "absolute" }}
      >
        <Path
          d="M9.30735 5.99052L55.7711 4.75063L59 8.06147L56.2773 29.6154L54.957 30.1851L52.679 31.8807L5.08649 35.1111L4.73076 28.0739L3.20523 9.91795L3 5.17287L12.2832 4"
          fill={theme.colors.text}
          opacity={isChecked ? 1 : 0}
        />
        <Path
          d="M4.14462 11.7464C3.26005 4.5106 8.25486 5.51279 11.3741 4.48387M11.3741 4.48387C23.5718 4.85802 43.0988 3.2278 50.8737 4.48387H11.3741ZM11.3741 4.48387C18.1181 4.20994 26.7243 4.65759 50.8737 4.48387H11.3741ZM50.8737 4.48387C54.6713 5.54619 58.7417 6.80895 58.1032 11.7464L50.8737 4.48387ZM50.8737 4.48387C55.6823 5.8268 59.3535 5.84685 58.1032 11.7464L50.8737 4.48387ZM58.1032 11.7464C57.7706 14.018 60.278 17.6192 58.1032 26.2647V11.7464ZM58.1032 11.7464C57.5179 16.9511 58.03 23.639 58.1032 26.2647V11.7464ZM58.1032 26.2647C59.5664 33.7745 55.8951 35.7187 50.8737 33.5273L58.1032 26.2647ZM58.1032 26.2647C56.201 31.1354 57.3649 32.4716 50.8737 33.5273L58.1032 26.2647ZM50.8737 33.5273C37.8513 35.3846 26.7243 35.8791 11.3741 33.5273H50.8737ZM50.8737 33.5273C38.4764 34.79 24.2901 32.6921 11.3741 33.5273H50.8737ZM11.3741 33.5273C5.15555 32.0841 2.94746 31.1955 4.14462 26.2647L11.3741 33.5273ZM11.3741 33.5273C3.56599 33.6876 1.37785 30.6076 4.14462 26.2647L11.3741 33.5273ZM4.14462 26.2647C4.7698 23.3784 3.53274 19.2427 4.14462 11.7464V26.2647ZM4.14462 26.2647C3.06052 22.2493 3.72561 18.7951 4.14462 11.7464V26.2647ZM4.14462 11.7464C4.7964 5.43929 5.36173 5.62637 11.3741 4.48387L4.14462 11.7464Z"
          stroke={theme.colors.text}
          stroke-width="4"
          stroke-linecap="round"
          opacity={isChecked ? 1 : 0}
        />
      </Svg>

      <Typography
        variant="title-2"
        style={{
          color: isChecked ? theme.colors.background : theme.colors.text,
        }}
      >
        {type.toUpperCase()}
      </Typography>
    </YesNoButtonContainer>
  );
};
