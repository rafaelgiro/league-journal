import { StyleProp, TextStyle } from "react-native";

export interface RadioButtonProps {
  label: string;
  isChecked: boolean;
  name: string;
  style?: StyleProp<TextStyle>;
  handlePress: (name: string) => void;
}
