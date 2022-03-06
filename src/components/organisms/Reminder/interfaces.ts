import { ViewProps } from "react-native";

export interface ReminderProps extends Reminder, ViewProps {
  isAnswering: boolean;
  handleChange: (id: number, newAnswer: any) => void;
  onDelete?: (id: number) => void;
}
