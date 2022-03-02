import { ViewProps } from "react-native";

export interface QuestionProps extends Question, ViewProps {
  isAnswering: boolean;
  allyChampions?: Champion[];
  enemyChampions?: Champion[];
}

export interface QuestionAnswerProps {
  id: Question["id"];
  type: Question["type"];
  allyChampions?: Champion[];
  enemyChampions?: Champion[];
  handleChange: Question["handleChange"];
}
