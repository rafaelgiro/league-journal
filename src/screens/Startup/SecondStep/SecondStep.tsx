import { Typography } from "../../../components/atoms/Typography";
import { QuestionList } from "../../../components/templates/QuestionList";
import { StartupStep } from "../../../components/templates/StartupStep";
import { Wrapper } from "../../../components/templates/Wrapper";

export const StartupSecondStep = () => {
  return (
    <Wrapper>
      <StartupStep step={1}>
        <Typography variant="title-1">Perguntas</Typography>
        <Typography variant="body-1" style={{ marginBottom: 16 }}>
          Cadastre perguntas para serem feitas durante a tela de carregamento.
          Cada pergunta pode ter um tipo de resposta diferente.
        </Typography>
        <QuestionList isAnswering={false} />
      </StartupStep>
    </Wrapper>
  );
};
