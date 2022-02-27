import { StyleProp, TextStyle } from "react-native";

export interface CheckboxProps {
  label: string;
  isChecked: boolean;
  style?: StyleProp<TextStyle>;
  handlePress: (isChecked: boolean) => void;
}
