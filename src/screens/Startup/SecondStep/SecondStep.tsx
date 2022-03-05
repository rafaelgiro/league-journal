import { QuestionList } from "../../../components/templates/QuestionList";
import { StartupStep } from "../../../components/templates/StartupStep";

export const StartupSecondStep = () => {
  return (
    <StartupStep step={1}>
      <QuestionList isAnswering={false} />
    </StartupStep>
  );
};
