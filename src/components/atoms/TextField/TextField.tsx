import { useState } from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@emotion/react";
import {
  useFonts,
  PatrickHand_400Regular,
} from "@expo-google-fonts/patrick-hand";

import { Typography } from "../Typography";

import { StyledTextField, TextFieldContainer } from "./styles";
import { TextFieldProps } from "./interfaces";

export const TextField = (props: TextFieldProps) => {
  const { label, style, ...rest } = props;
  const { colors } = useTheme();
  const [hasFocus, setHasFocus] = useState(false);
  const [fontLoaded] = useFonts({
    PatrickHand_400Regular,
  });

  if (!fontLoaded) return null;

  return (
    <TextFieldContainer style={style}>
      <Typography variant="label">{label}</Typography>
      <StyledTextField
        {...rest}
        placeholderTextColor={colors.secondary}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        selectionColor={colors.text}
      />
      <Svg width="100%" height="16%" viewBox="0 0 310 5" fill="none">
        <Path
          d="M1 1.58004C51.7847 1.74391 256.478 0.660954 307.778 1.10981M3.07688 3.10472C54.1088 3.65332 257.933 4.11643 309 3.97394L3.07688 3.10472Z"
          stroke={colors.text}
          strokeOpacity={hasFocus ? 1 : 0.7}
          stroke-linecap="round"
        />
      </Svg>
    </TextFieldContainer>
  );
};
