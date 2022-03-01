import { ViewProps } from "react-native";

export interface AccordionItemProps extends ViewProps {
  title: string;
  isOpen?: boolean;
  handlePress?: () => void;
}
