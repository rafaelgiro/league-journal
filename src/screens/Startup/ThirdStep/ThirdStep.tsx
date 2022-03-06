import { Typography } from "../../../components/atoms/Typography";
import { ReminderList } from "../../../components/templates/ReminderList";
import { StartupStep } from "../../../components/templates/StartupStep";
import { Wrapper } from "../../../components/templates/Wrapper";

export const StartupThirdStep = () => {
  return (
    <Wrapper>
      <StartupStep step={2}>
        <Typography variant="title-1">Lembretes</Typography>
        <Typography variant="body-1" style={{ marginBottom: 16 }}>
          Cadastre lembretes para sua partida.
        </Typography>
        <ReminderList isAnswering={false} />
      </StartupStep>
    </Wrapper>
  );
};
