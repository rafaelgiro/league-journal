import { TouchableOpacityProps, ViewProps } from "react-native";

export interface AccordionItemProps extends ViewProps {
  title: string;
  isOpen?: boolean;
  handlePress?: () => void;
  isAnswering?: boolean;
}

export interface EditButtonProps extends TouchableOpacityProps {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}

export interface DeleteButtonProps extends TouchableOpacityProps {
  onDelete: () => void;
  title: string;
}
