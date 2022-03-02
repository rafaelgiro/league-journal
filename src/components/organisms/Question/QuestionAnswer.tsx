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
  const { id, type, allyChampions, enemyChampions, handleChange } = props;

  switch (type) {
    case "multiple-champions":
      if (!allyChampions || !enemyChampions) return <></>;

      return (
        <MultipleChampionsAnswer
          allyChampions={allyChampions}
          enemyChampions={enemyChampions}
          handleChange={(val) => handleChange(id, val)}
        />
      );

    case "single-champion":
      if (!allyChampions || !enemyChampions) return <></>;

      return (
        <SingleChampionAnswer
          allyChampions={allyChampions}
          enemyChampions={enemyChampions}
          handleChange={(val) => handleChange(id, val)}
        />
      );

    case "lane":
      return <LaneAnswer handleChange={(val) => handleChange(id, val)} />;

    case "yesno":
      return <YesOrNo handleChange={(val) => handleChange(id, val)} />;

    case "text":
      return <Text handleChange={(val) => handleChange(id, val)} />;

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
