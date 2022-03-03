import { TouchableOpacityProps, ViewProps } from "react-native";
import { TextFieldProps } from "../../atoms/TextField/interfaces";

export interface AccordionItemProps extends ViewProps {
  title: string;
  setTitle: (title: string) => void;
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
