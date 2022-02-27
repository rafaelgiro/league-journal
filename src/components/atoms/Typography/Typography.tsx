import { TextProps } from "react-native";
import styled, { css } from "@emotion/native";
import {
  useFonts,
  PatrickHand_400Regular,
} from "@expo-google-fonts/patrick-hand";

import { variants } from "./helpers";

export type variant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "body-1"
  | "label"
  | "label-small"
  | "button"
  | "eyebrown";

interface TypographyProps extends TextProps {
  variant: variant;
}

const BaseTypography = styled.Text<TypographyProps>`
  ${({ variant, theme }) => css`
    font-family: ${variants[variant].fontFamily};
    font-size: ${variants[variant].fontSize};
    letter-spacing: ${variants[variant].letterSpacing};
    color: ${theme.colors.text};
    text-transform: ${variants[variant].textTransform};
  `}
`;

export const Typography = (props: TypographyProps) => {
  const [fontLoaded] = useFonts({
    PatrickHand_400Regular,
  });

  if (!fontLoaded) return null;

  return <BaseTypography {...props} />;
};
