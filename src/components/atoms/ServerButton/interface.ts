import { ButtonProps as NativeButtonProps } from "react-native";

export interface ButtonProps extends Omit<NativeButtonProps, "title"> {
  children: string;
  priority?: "primary" | "secondary";
  isSelected: boolean;
}
