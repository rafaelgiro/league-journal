import { QuestionList } from "../../components/templates/QuestionList";
import { Wrapper } from "../../components/templates/Wrapper";

import { QuestionsScreenProps } from "./interfaces";

export const QuestionsScreen = (props: QuestionsScreenProps) => {
  return (
    <Wrapper backButton>
      <QuestionList
        isAnswering={props.route?.params?.isAnswering || false}
        allyChampions={props.route?.params?.allyChampions}
        enemyChampions={props.route?.params?.enemyChampions}
      />
    </Wrapper>
  );
};
