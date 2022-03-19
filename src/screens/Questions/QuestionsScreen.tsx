import { QuestionList } from "../../components/templates/QuestionList";
import { Wrapper } from "../../components/templates/Wrapper";

export const QuestionsScreen = () => {
  return (
    <Wrapper backButton>
      <QuestionList isAnswering={false} />
    </Wrapper>
  );
};
