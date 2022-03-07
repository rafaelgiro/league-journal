import { TextProps } from "react-native";

export type variant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "body-1"
  | "label"
  | "label-small"
  | "button"
  | "eyebrown";

export interface TypographyProps extends TextProps {
  variant: variant;
  hasError?: boolean;
}
