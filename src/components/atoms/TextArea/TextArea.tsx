import { useRef, useState } from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@emotion/react";
import {
  useFonts,
  PatrickHand_400Regular,
} from "@expo-google-fonts/patrick-hand";

import { Typography } from "../Typography";

import { StyledTextArea, TextAreaContainer } from "./styles";
import { TextAreaProps } from "./interfaces";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from "react-native";

export const TextArea = (props: TextAreaProps) => {
  const {
    label,
    numberOfLines = 6,
    placeholder = "Type here...",
    style,
    onChangeText,
    ...other
  } = props;
  const { colors } = useTheme();
  const [fontLoaded] = useFonts({
    PatrickHand_400Regular,
  });
  const [val, setVal] = useState("");

  function handleChange() {
    if (onChangeText) onChangeText(val);
  }

  if (!fontLoaded) return null;

  return (
    <StyledTextArea
      {...other}
      value={val}
      onChangeText={(v) => setVal(v)}
      multiline
      onBlur={handleChange}
      placeholder={placeholder}
      numberOfLines={numberOfLines}
      placeholderTextColor={colors.secondary}
      selectionColor={colors.text}
    />
  );
};
