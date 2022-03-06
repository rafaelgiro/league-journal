import { View } from "react-native";

import { Typography } from "../../atoms/Typography";
import {
  LaneAnswer,
  MultipleChampionsAnswer,
  SingleChampionAnswer,
  Text,
  YesOrNo,
} from "../Answers";
import { defaultAnswers } from "../Answers/helpers";

import { QuestionAnswerProps } from "./interfaces";

export const QuestionAnswer = (props: QuestionAnswerProps) => {
  const {
    id,
    type,
    allyChampions,
    enemyChampions,
    handleChange,
    initialValue,
    isAnswering,
  } = props;

  switch (type) {
    case "multiple-champions":
      if (!allyChampions || !enemyChampions) return <></>;

      return (
        <MultipleChampionsAnswer
          allyChampions={allyChampions}
          enemyChampions={enemyChampions}
          handleChange={(val) => handleChange(id, val)}
          initialValue={isAnswering ? initialValue : defaultAnswers[type]}
        />
      );

    case "single-champion":
      if (!allyChampions || !enemyChampions) return <></>;

      return (
        <SingleChampionAnswer
          allyChampions={allyChampions}
          enemyChampions={enemyChampions}
          handleChange={(val) => handleChange(id, val)}
          initialValue={isAnswering ? initialValue : defaultAnswers[type]}
        />
      );

    case "lane":
      return (
        <LaneAnswer
          handleChange={(val) => handleChange(id, val)}
          initialValue={isAnswering ? initialValue : defaultAnswers[type]}
        />
      );

    case "yesno":
      return (
        <YesOrNo
          handleChange={(val) => handleChange(id, val)}
          initialValue={isAnswering ? initialValue : defaultAnswers[type]}
        />
      );

    case "text":
      return (
        <Text
          handleChange={(val) => handleChange(id, val)}
          initialValue={isAnswering ? initialValue : defaultAnswers[type]}
        />
      );

    default:
      return (
        <View
          style={{ padding: 8, justifyContent: "center", alignItems: "center" }}
        >
          <Typography variant="title-1">hello</Typography>
        </View>
      );
  }
};
