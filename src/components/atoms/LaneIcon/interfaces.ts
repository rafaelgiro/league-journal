import { StyleProp, TextStyle } from "react-native";

export interface LaneIconProps {
  lane: "top" | "mid" | "bot" | "jungle";
  handlePress?: (lane: "top" | "mid" | "bot" | "jungle") => void;
  style?: StyleProp<TextStyle>;
}
