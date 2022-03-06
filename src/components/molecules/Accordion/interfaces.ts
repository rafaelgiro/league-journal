import { TouchableOpacityProps, ViewProps } from "react-native";

export interface AccordionProps extends ViewProps {
  expandedItem?: number;
}

export interface AccordionItemProps extends ViewProps {
  title: string;
  setTitle: (title: string) => void;
  type: "question" | "reminder";
  isOpen?: boolean;
  handlePress?: () => void;
  isAnswering?: boolean;
  onDelete: () => void;
}

export interface EditButtonProps extends TouchableOpacityProps {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}

export interface DeleteButtonProps extends TouchableOpacityProps {
  onDelete: () => void;
  title: string;
}
