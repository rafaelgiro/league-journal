import { StyleProp, TextStyle } from "react-native";

export interface YesNoButtonProps {
  type: "yes" | "no";
  style?: StyleProp<TextStyle>;
  handlePress: (type: "yes" | "no") => void;
  isChecked: boolean;
}
