import { ViewProps } from "react-native";

export interface QuestionProps extends Question, ViewProps {
  isAnswering: boolean;
  allyChampions?: Champion[];
  enemyChampions?: Champion[];
  handleChange: (id: number, newAnswer: any) => void;
  initialValue?: any;
  onDelete?: (id: number) => void;
}

export interface QuestionAnswerProps {
  id: Question["id"];
  type: Question["type"];
  allyChampions?: Champion[];
  enemyChampions?: Champion[];
  handleChange: QuestionProps["handleChange"];
  initialValue: QuestionProps["initialValue"];
}
