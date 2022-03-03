import { View } from "react-native";

import { Typography } from "../../atoms/Typography";
import {
  LaneAnswer,
  MultipleChampionsAnswer,
  SingleChampionAnswer,
  Text,
  YesOrNo,
} from "../Answers";

import { QuestionAnswerProps } from "./interfaces";

export const QuestionAnswer = (props: QuestionAnswerProps) => {
  const {
    id,
    type,
    allyChampions,
    enemyChampions,
    handleChange,
    initialValue,
  } = props;

  switch (type) {
    case "multiple-champions":
      if (!allyChampions || !enemyChampions) return <></>;

      return (
        <MultipleChampionsAnswer
          allyChampions={allyChampions}
          enemyChampions={enemyChampions}
          handleChange={(val) => handleChange(id, val)}
          initialValue={initialValue}
        />
      );

    case "single-champion":
      if (!allyChampions || !enemyChampions) return <></>;

      return (
        <SingleChampionAnswer
          allyChampions={allyChampions}
          enemyChampions={enemyChampions}
          handleChange={(val) => handleChange(id, val)}
          initialValue={initialValue}
        />
      );

    case "lane":
      return (
        <LaneAnswer
          handleChange={(val) => handleChange(id, val)}
          initialValue={initialValue}
        />
      );

    case "yesno":
      return (
        <YesOrNo
          handleChange={(val) => handleChange(id, val)}
          initialValue={initialValue}
        />
      );

    case "text":
      return (
        <Text
          handleChange={(val) => handleChange(id, val)}
          initialValue={initialValue}
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
