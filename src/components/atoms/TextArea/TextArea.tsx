import { useState } from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@emotion/react";
import {
  useFonts,
  PatrickHand_400Regular,
} from "@expo-google-fonts/patrick-hand";

import { Typography } from "../Typography";

import { StyledTextArea, TextAreaContainer } from "./styles";
import { TextAreaProps } from "./interfaces";

export const TextArea = (props: TextAreaProps) => {
  const {
    label,
    numberOfLines = 6,
    placeholder = "Type here...",
    style,
    ...other
  } = props;
  const { colors } = useTheme();
  const [fontLoaded] = useFonts({
    PatrickHand_400Regular,
  });

  if (!fontLoaded) return null;

  return (
    // <TextAreaContainer style={style}>
    // {label && <Typography variant="label">{label}</Typography>}
    <StyledTextArea
      {...other}
      placeholder={placeholder}
      numberOfLines={numberOfLines}
      placeholderTextColor={colors.secondary}
      selectionColor={colors.text}
    />
    // </TextAreaContainer>
  );
};
